import { Injectable } from '@nestjs/common';
import { DatabaseProviders } from '../database/database.providers';
import { DatabaseModel, UrlDataModel } from '../models/database.model';

@Injectable()
export class StatisticsService {
  changeVisitStatistics(tinyUrl: string) {
    DatabaseProviders.increaseStatistics(tinyUrl);
    DatabaseProviders.changeLastClickedTime(tinyUrl);
  }

  getAllStatistics(): DatabaseModel {
    return DatabaseProviders.getAllStatistics();
  }

  getAllShortenedLinks(): string[] {
    return DatabaseProviders.getAllShortenedLinks();
  }

  getStatisticsByTinyUrl(tinyUrl): UrlDataModel {
    return DatabaseProviders.getStatisticsByTinyUrl(tinyUrl);
  }
}
