import { ResponseFromApi, Result } from "../types";
import axios from "axios";

export const getResults = (searchTerm: string) => {
  return fetchResults(searchTerm).then(mapFromApiToResults);
};
const fetchResults = async (searchTerm: string): Promise<ResponseFromApi> => {
  const response = await axios.get(
    "https://api.bing.microsoft.com/v7.0/search?q=" +
      searchTerm +
      "&count=" +
      9 +
      "&offset=" +
      0 +
      "&mkt=en-US&freshness=Month",
    {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.REACT_APP_BING_SEARCH_API_KEY,
      },
    },
  );
  console.log(response);

  return response.data.webPages?.value;
};
const mapFromApiToResults = (apiResponse: ResponseFromApi): Array<Result> => {
  return apiResponse?.map((resultFromApi) => {
    let { name, url, snippet, thumbnailUrl } = resultFromApi;
    return {
      name,
      url,
      snippet,
      thumbnailUrl,
    };
  });
};
