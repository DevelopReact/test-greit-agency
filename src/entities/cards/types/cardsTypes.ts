export interface GeneralInfo {
  name: string;
  province: string;
  bathrooms: number;
  living_area: number;
  reference: string;
  rooms: string;
  coordinates: { latitude: string; longitude: string };
  price: number;
  type: string;
  size: number;
  terrace: number;
}

export interface Card {
  _id: string;
  generalInfo: GeneralInfo;
  images?: {
    large: string;
    medium: string;
    original: string;
    small: string;
  }[];
}

export interface CardFetchResponse {
  currentPage: number;
  projects: Card[];
  totalObjects: number;
  totalPages: number;
}
