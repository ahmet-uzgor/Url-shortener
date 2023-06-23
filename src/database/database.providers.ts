import { DatabaseModel } from '../models/database.model';

const database: DatabaseModel = {};

const tinyUrls = {
  tinyUrl: 'longUrl',
};

export const DatabaseProviders = {
  findByLongUrl: (url: string) => {
    return database[url];
  },
  addShortenedUrl: (url: string, tinyUrl: string): void => {
    const createdDate = new Date();
    database[url] = {
      tinyUrl,
      visitNumber: 0,
      createdAt: createdDate,
      lastClickedAt: createdDate,
    };
    tinyUrls[tinyUrl] = url;
  },
  increaseStatistics: (tinyUrl: string): number => {
    const longUrl = DatabaseProviders.getLongUrl(tinyUrl);
    database[longUrl].visitNumber += 1;
    return database[longUrl].visitNumber;
  },
  getAllStatistics: (): DatabaseModel => {
    return database;
  },
  getLongUrl: (tinyUrl: string): string => {
    return tinyUrls[tinyUrl];
  },
  getAllShortenedLinks: (): string[] => {
    const domain =
      process.env.NODE_ENV === 'dev'
        ? process.env.DEV_DOMAIN
        : process.env.PROD_DOMAIN;
    const lists = Object.values(database).map(
      (url) => `${domain}/${url.tinyUrl}`,
    );
    return lists;
  },
  getStatisticsByTinyUrl: (tinyUrl: string) => {
    const longUrl = DatabaseProviders.getLongUrl(tinyUrl);
    return database[longUrl];
  },
  changeLastClickedTime: (tinyUrl: string): void => {
    const longUrl = DatabaseProviders.getLongUrl(tinyUrl);
    database[longUrl].lastClickedAt = new Date();
  },
};
