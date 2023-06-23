import { Module } from '@nestjs/common';
import { UrlsModule } from './urls/urls.module';
import { StatisticsModule } from './statistics/statistics.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UrlsModule, StatisticsModule, ConfigModule.forRoot()],
})
export class AppModule {}
