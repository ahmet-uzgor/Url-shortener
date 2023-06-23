import { Controller, Get, Param } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { DatabaseModel, UrlDataModel } from '../models/database.model';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('/allstats')
  getAllStats(): DatabaseModel {
    return this.statisticsService.getAllStatistics();
  }

  @Get('/links')
  getAllShortenedLinks(): string[] {
    return this.statisticsService.getAllShortenedLinks();
  }

  @Get('/:tinyUrl')
  getStatsByTinyUrl(@Param('tinyUrl') tinyUrl: string): UrlDataModel {
    return this.statisticsService.getStatisticsByTinyUrl(tinyUrl);
  }
}
