import { filterRegionState } from "atoms/filterRegionState";
import { filterSearchState } from "atoms/filterSearchState";
import { useRecoilState } from "recoil";

export default function MainSearchBar() {
  const [search, setSearch] = useRecoilState<string>(filterSearchState);
  const [selectedRegion, setSelectedRegion] =
    useRecoilState<string>(filterRegionState);

  function handleRegionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedRegion(event.target.value);
  }

  function clearForms() {
    setSearch("");
    setSelectedRegion("");
  }

  return (
    <>
      <form
        className="flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-lg input input-bordered"
          aria-label="Search"
          role="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full max-w-xs select select-bordered"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option disabled value="">
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <button className="btn" onClick={clearForms}>
          Clear
        </button>
      </form>
    </>
  );
}
