export interface DatabaseModel {
  [key: string]: UrlDataModel;
}

export interface UrlDataModel {
  tinyUrl: string;
  visitNumber: number;
  createdAt: Date;
  lastClickedAt: Date;
}
