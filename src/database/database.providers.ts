const database = {};

const tinyUrls = {
  tinyUrl: 'longUrl',
};

export const DatabaseProviders = {
  findByLongUrl: (url: string) => {
    return database[url];
  },
  addShortenedUrl: (url: string, tinyUrl: string) => {
    database[url] = { tinyUrl, visitNumber: 0 };
    tinyUrls[tinyUrl] = url;
  },
  increaseStatistics: (tinyUrl: string) => {
    const longUrl = tinyUrls[tinyUrl];
    database[longUrl].visitNumber += 1;
    return database[longUrl].visitNumber;
  },
  getAllStatistics: () => {
    return database;
  },
  getLongUrl: (tinyUrl: string) => {
    return tinyUrls[tinyUrl];
  },
};
