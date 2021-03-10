import {
  IDrink,
  IFetchParams,
  IHomeSection,
  IMenuSection,
} from "../interfaces";

const fetchApi = async (
  endpoint: string | undefined,
  method: string,
  query: string,
  params: IFetchParams = {}
) => {
  let url = `${endpoint}${query}`;
  if (Object.keys(params).length) {
    url = url.concat("?");
    for (const i in params) {
      // @ts-ignore
      url = url.concat(`${i}=${params[i]}&`);
    }
  }

  const req = await fetch(url, { method });
  const res = await req.json();

  if (res.errors) {
    throw new Error("Failed to fetch data");
  } else {
    return res;
  }
};

export async function getHomeSections(
  endpoint: string | undefined
): Promise<IHomeSection[]> {
  const data = await fetchApi(endpoint, "GET", "contents");
  return data;
}

export async function getDrinks(
  endpoint: string | undefined
): Promise<string[]> {
  const data = await fetchApi(endpoint, "GET", "drinks");
  let listOfDrinks: string[] = [];
  data.forEach((response: IDrink): void => {
    listOfDrinks.push(response.Name);
  });
  return listOfDrinks;
}

export async function getFood(
  endpoint: string | undefined
): Promise<IMenuSection[]> {
  const data = await fetchApi(endpoint, "GET", "foods");
  return data;
}

export async function getHeroText(
  endpoint: string | undefined
): Promise<string> {
  const data = await fetchApi(endpoint, "GET", "hero-heading");
  return data.Text;
}
