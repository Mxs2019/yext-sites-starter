export type Address = {
  line1: string;
  line2?: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export interface Hours extends Record<string, any> {
  monday?: Day;
  tuesday?: Day;
  wednesday?: Day;
  thursday?: Day;
  friday?: Day;
  saturday?: Day;
  sunday?: Day;
}

export type Day = {
  isClosed: boolean;
  openIntervals: OpenIntervals[];
};

export type OpenIntervals = {
  start: string;
  end: string;
};

export type Thumbnail = {
  height: number;
  width: number;
  url: string;
};

type Image = {
  height?: number;
  width?: number;
  url: string;
  thumbnails?: Thumbnail[];
};

export type PhotoGallery = {
  photoGallery: Image[];
};

export type Location = {
  id: string;
  name: string;
  address: Address;
  description?: string;
  mainPhone?: string;
  featuredMessage?: {
    description: string;
    url?: string;
  };

  locale: string;
  uid: number;
  geocodedCoordinate?: Coordinates;
  hours?: Hours;
  photoGallery: PhotoGallery;
  services?: string[];
};
