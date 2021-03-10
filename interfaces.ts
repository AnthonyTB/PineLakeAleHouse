export interface IFetchParams {
  id?: number;
  _sort?: string;
  _limit?: number;
}

export interface ICMSImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  created_at: string;
  updated_at: string;
}

export interface IHomeSection {
  id: number;
  Heading: string;
  Body: string;
  Button_Label: string;
  Button_Path: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  Image: ICMSImage | null;
}

export interface IDrink {
  id: number;
  Name: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface IMenuItem {
  id: number;
  Item: string;
  Description?: string | undefined;
  Price?: number | undefined;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface IMenuSection {
  id: number;
  name: string;
  Description: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  menu_items: IMenuItem[];
}
