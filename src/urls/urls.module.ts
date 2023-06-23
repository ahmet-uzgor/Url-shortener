import { Module } from '@nestjs/common';
import { UrlController } from './urls.controller';
import { UrlService } from './urls.service';
import { StatisticsService } from 'src/statistics/statistics.service';

@Module({
  controllers: [UrlController],
  providers: [UrlService, StatisticsService],
})
export class UrlsModule {}
