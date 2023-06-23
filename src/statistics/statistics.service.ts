import { Injectable } from '@nestjs/common';
import { DatabaseProviders } from '../database/database.providers';

@Injectable()
export class StatisticsService {
  increaseVisitStatistics(tinyUrl: string) {
    DatabaseProviders.increaseStatistics(tinyUrl);
  }

  getAllStatistics() {
    return DatabaseProviders.getAllStatistics();
  }
}
