import Link from "next/link";

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
  capital: string[];
  flagSrc: string;
}) {
  return (
    <>
      <Link href="/" className="shadow-xl card w-80 h-96 bg-base-100">
        <figure className="w-full h-[10rem] border relative">
          <img src={flagSrc} alt={title} className="w-full h-full" />
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
