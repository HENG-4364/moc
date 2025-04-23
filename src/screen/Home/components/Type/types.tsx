export type HomeScreenProps = {
  documentCategory: any[];
  menu: any;
  news: any;
  dict: any;
  sasData: any;
  publicPageDetail: any;
  publicKeyEconomicIndicators: PublicKeyEconomicIndicators;
};

export interface PublicKeyEconomicIndicators {
  gasolineIndicator?: null | GasolineIndicator;
  cpiIndicator?: null | CPIIndicator;
}

export interface GasolineIndicator {
  percentage?: null | string;
  date?: null | string;
}

export interface CPIIndicator {
  percentage?: null | string;
  date?: null | string;
}

export type HotNewsProps = {
  dict: any;
};

export type AnnouncementItemProps = {
  icon?: string;
  title?: string;
  link?: string;
  color?: string;
  description?: string;
  dict?: any;
};

export type MessageFromMinisterProps = {
  title?: string;
  subtitle?: string;
  button?: string;
  description?: any;
  image?: string;
  imageW?: number;
  imageH?: number;
  link?: string;
  bgImage?: string;
};

export type AutomationItemProps = {
  icon?: string;
  title?: string;
  link?: string;
  color?: string;
  image: string;
};

export type KeyEconomicIndicatorsProps = {
  dict: any;
  sasData: any;
  publicKeyEconomicIndicators: PublicKeyEconomicIndicators;
};

export type KeyEconomicIndicatorsItemProps = {
  icon?: string;
  title?: string;
  link?: string;
  color?: string;
  image: string;
  date?: any;
  number?: string;
  dict?: any;
  source?: string;
};

export type KeyActivitiesProps = {
  dict: any;
};
