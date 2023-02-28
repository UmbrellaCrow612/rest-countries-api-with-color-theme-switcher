import MainSearchBar from "@/components/MainSearchBar";

export default function Page() {
  return (
    <section className="min-h-screen p-10 flex flex-col gap-6">
      <MainSearchBar />

      <div>Dynamic content</div>
    </section>
  );
}
