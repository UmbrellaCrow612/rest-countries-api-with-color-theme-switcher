/* eslint-disable @next/next/no-img-element */
import { filterRegionState } from "atoms/filterRegionState";
import { filterSearchState } from "atoms/filterSearchState";
import Link from "next/link";
import { useRecoilValue } from "recoil";

export default function Card({
  title,
  population,
  region,
  capital,
  flagSrc,
}: {
  title: string;
  population: number;
  region: string;
  capital: any;
  flagSrc: string;
}) {
  const regionState = useRecoilValue(filterRegionState);
  const searchState = useRecoilValue(filterSearchState);

  const hideByRegion = regionState.length > 1 && region !== regionState;
  const hideBySearch =
    searchState.length > 1 &&
    !title.toLowerCase().includes(searchState.toLowerCase());

  const hide = hideByRegion || hideBySearch;

  return (
    <>
      <Link
        href={`/${title.toLowerCase()}`}
        className={`shadow-xl card w-80 h-96 bg-base-100 ${
          hide ? "hidden" : ""
        }`}
      >
        <figure className="w-full h-[10rem] relative">
          <img
            src={flagSrc}
            alt={title}
            className="w-full h-full"
            loading="lazy"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold card-title">{title}</h2>
          <p>
            <span className="font-bold">Population:</span> {population}
          </p>
          <p>
            <span className="font-bold">Region:</span> {region}
          </p>
          <p>
            <span className="font-bold">Capital:</span> {capital}
          </p>
        </div>
      </Link>
    </>
  );
}
