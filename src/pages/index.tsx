import CountryList from "@/components/CountryList";
import MainSearchBar from "@/components/MainSearchBar";

export default function Page() {
  return (
    <section className="flex flex-col h-auto gap-6 p-10 lg:min-h-screen">
      <MainSearchBar />

      <CountryList />
    </section>
  );
}
