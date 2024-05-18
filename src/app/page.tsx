import { CountryCard } from "@/components/CountryCard";
import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { Country } from "@/types/country.types";
import Link from "next/link";

async function getData(name?: string, region?: string) {
  const apiUrl = "https://restcountries.com/v3.1";
  const filter = `fields=name,flags,population,capital,region`;

  if (name) {
    const res = await fetch(`${apiUrl}/name/${name}?${filter}`);
    return res.json();
  }
  if (region) {
    const res = await fetch(`${apiUrl}/region/${region}?${filter}`);
    return res.json();
  }

  const res = await fetch(`${apiUrl}/all?${filter}`);
  return res.json();
}

export default async function Home({ searchParams }: { searchParams: any }) {
  const countries = await getData(searchParams.country, searchParams.filter);

  return (
    <main className="min-h-screen flex gap-10 flex-col px-20 py-10">
      <section className="flex items-center justify-between gap-10">
        {/* Search */}
        <Search />

        {/* Filter section */}
        <Filter />
      </section>
      <section
        id="country-list"
        className="flex gap-10 justify-center flex-wrap"
      >
        {countries.slice(0, 20).map((country: Country) => (
          <Link href={`/${country.name.common}`} key={country.name.common}>
            <CountryCard country={country} />
          </Link>
        ))}
      </section>
    </main>
  );
}
