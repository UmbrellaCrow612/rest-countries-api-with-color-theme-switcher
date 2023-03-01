import useCountries from "@/hooks/useCountries";
import Card from "./Card";

export default function CountryList() {
  const { countries, isError, isLoading } = useCountries();

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError) {
    return <>Error</>;
  }
  return (
    <div className="flex flex-wrap w-full gap-5 p-2 overflow-y-scroll justify-evenly h-[40rem]">
      {countries?.map((item) => (
        <Card
          key={item.cca2}
          title={item.name.common}
          capital={item.capital}
          population={item.population}
          region={item.region}
          flagSrc={item.flags.png}
        />
      ))}
    </div>
  );
}
