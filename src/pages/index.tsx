import CountryList from "@/components/CountryList";
import MainSearchBar from "@/components/MainSearchBar";

export default function Page() {
  return (
    <section className="flex flex-col min-h-screen gap-6 p-10">
      <MainSearchBar />

      <CountryList />
    </section>
  );
}
