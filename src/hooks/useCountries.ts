import useSWR from "swr";

type Country = {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { official: string; common: string } };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: { name: string; symbol: string } };
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: { official: string; common: string } };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: { [key: string]: { f: string; m: string } };
  flag: string;
  maps: { [key: string]: string };
  population: number;
  gini: { [key: string]: number };
  fifa?: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useCountries = (): {
  countries: Country[] | undefined;
  isLoading: boolean;
  isError: boolean;
} => {
  const { data, error } = useSWR<Country[]>(
    "https://restcountries.com/v3.1/all",
    fetcher
  );
  const isLoading = !data && !error;
  const isError = error !== undefined;
  return { countries: data, isLoading, isError };
};

export default useCountries;
