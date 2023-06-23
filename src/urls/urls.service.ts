import { Injectable } from '@nestjs/common';
import { DatabaseProviders } from '../database/database.providers';
import * as stringHasher from 'short-hash';

@Injectable()
export class UrlService {
  getLongUrl(tinyUrl: string) {
    return DatabaseProviders.getLongUrl(tinyUrl);
  }

  getAllVisitsStats() {
    return DatabaseProviders.getAllStatistics();
  }

  shortenUrl(url: string): string {
    const urlHasAlreadyShortened = DatabaseProviders.findByLongUrl(url);
    if (urlHasAlreadyShortened) {
      return urlHasAlreadyShortened.tinyUrl;
    }

    // TODO: add functionality
    const tinyUrl = this.hash(url);
    DatabaseProviders.addShortenedUrl(url, tinyUrl);

    return tinyUrl;
  }

  hash(url: string): string {
    return stringHasher(url);
  }
}
