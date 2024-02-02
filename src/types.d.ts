export interface Result {
  name: string;
  url: string;
  snippet: string;
  thumbnailUrl: string;
}

export type ResponseFromApi = Array<{
  name: string;
  url: string;
  snippet: string;
  thumbnailUrl: string;
}>;
