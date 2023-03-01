/* eslint-disable @next/next/no-img-element */
// country

import useCountries from "@/hooks/useCountries";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const { asPath } = useRouter();
  const { countries, isError, isLoading } = useCountries(asPath);
  if (isLoading) {
    return <>Loading</>;
  }
  if (isError) {
    return <>Error</>;
  }
  return (
    <section className="items-start h-auto p-10 space-y-10">
      <Link href="/" className="btn btn-outline">
        Back
      </Link>

      {countries?.map((item) => (
        <div key={item.cca2} className="space-y-10">
          <div className="h-64 max-w-md">
            <img
              src={item.flags.svg}
              alt=""
              loading="lazy"
              className="w-full h-full aspect-auto"
            />
          </div>

          <p className="text-2xl font-bold">Common name: {item.name.common}</p>
          <p className="text-2xl font-bold">
            Official name: {item.name.official}
          </p>
          <p className="text-2xl font-bold">
            Native name: {JSON.stringify(item.name.nativeName)}
          </p>
          {item.tld && (
            <p className="text-2xl font-bold">Top level domain: {item.tld}</p>
          )}
          <p className="text-2xl font-bold">cca2: {item.cca2}</p>
          <p className="text-2xl font-bold">ccn3: {item.ccn3}</p>
          <p className="text-2xl font-bold">cca3: {item.cca3}</p>
          <p className="text-2xl font-bold">cioc: {item.cioc}</p>
          <p className="text-2xl font-bold">
            Independent: {JSON.stringify(item.independent)}
          </p>
          <p className="text-2xl font-bold">Status: {item.status}</p>
          <p className="text-2xl font-bold">
            UN Member: {JSON.stringify(item.unMember)}
          </p>
          <p className="text-2xl font-bold">
            Currencies: {JSON.stringify(item.currencies)}
          </p>
          <p className="text-2xl font-bold">idd: {JSON.stringify(item.idd)}</p>
          <p className="text-2xl font-bold">capital: {item.capital}</p>
          <p className="text-2xl font-bold">
            Alt Spellings: {JSON.stringify(item.altSpellings)}
          </p>
          <p className="text-2xl font-bold">Region: {item.region}</p>
        </div>
      ))}
    </section>
  );
}

// Push to /country name
// Use hook but pass the name
// Display all the data about it from the json
