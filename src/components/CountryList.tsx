import useCountries from "@/hooks/useCountries";
import Card from "./Card";

export default function CountryList() {
  const { countries } = useCountries();
  return (
    <div className="flex flex-wrap w-full gap-5 p-2 overflow-y-scroll border justify-evenly h-[40rem]">
      {countries?.map((item) => (
        <Card
          key={item.cca2}
          title={item.name.common}
          capital={item.capital}
          population={item.population}
          region={item.region}
          flagSrc={item.flag}
        />
      ))}
    </div>
  );
}
