import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ShortenUrlBody } from 'src/models/shortenUrlBody.models';
import { UrlService } from './urls.service';
import { StatisticsService } from 'src/statistics/statistics.service';

@Controller()
export class UrlController {
  constructor(
    private readonly urlService: UrlService,
    private readonly statisticsService: StatisticsService,
  ) {}

  @Post('/shortenUrl')
  shortenUrl(@Body() shortenUrlBody: ShortenUrlBody): { tinyUrl: string } {
    if (!shortenUrlBody.url) {
      throw new BadRequestException('Url is not given');
    }

    const tinyUrl = this.urlService.shortenUrl(shortenUrlBody.url);
    const domain =
      process.env.NODE_ENV === 'dev'
        ? process.env.DEV_DOMAIN
        : process.env.PROD_DOMAIN;
    return {
      tinyUrl: `${domain}/${tinyUrl}`,
    };
  }

  @Get('/:tinyUrl')
  visitUrl(@Param('tinyUrl') tinyUrl: string, @Res() res) {
    // it increases visit number of shortenedUrl
    this.statisticsService.changeVisitStatistics(tinyUrl);

    // it redirects the original website when a user try to visit tiny url
    return res.redirect(this.urlService.getLongUrl(tinyUrl));
  }
}
