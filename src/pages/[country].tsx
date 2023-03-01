// country

import useCountries from "@/hooks/useCountries";
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
    <section className="min-h-screen border">
      {countries?.map((item) => (
        <>{item.name.common}</>
      ))}
    </section>
  );
}

// Push to /country name
// Use hook but pass the name
// Display all the data about it from the json
