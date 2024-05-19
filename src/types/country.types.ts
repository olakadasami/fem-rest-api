export type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: Object;
  };
  capital: string[];
  region: string;
  population: string;
};

export type CountryFull = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: Object;
  };
  tld: string[];
  currencies: Object;
  capital: string[];
  region: string;
  subregion: string;
  languages: Object;
  borders: string[];
  population: number;
};
