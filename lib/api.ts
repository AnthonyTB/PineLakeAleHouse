import { IFetchParams } from "../interfaces";

const fetchApi = async (
  method: string,
  query: string,
  params: IFetchParams = {}
) => {
  let url = `${process.env.CMS_ENDPOINT}${query}`;
  if (params) {
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

export async function getHomeSections() {
  const data = await fetchApi("GET", "contents");
}

export async function getDrinks() {
  const data = await fetchApi("GET", "drinks");
}

export async function getFood() {
  const data = await fetchApi("GET", "foods");
}
