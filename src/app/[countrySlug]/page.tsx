import BackButton from "@/components/BackButton";
import { CountryFull } from "@/types/country.types";
import Image from "next/image";
import Link from "next/link";

async function getCountry(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,flags,region,subregion,population,borders,tld,capital,languages,currencies`
  );

  return res.json();
}

async function getCountryByCode(code: string[]) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${code.join()}&fields=name`
  );

  return res.json();
}

const CountryDetailsPage = async ({
  params,
}: {
  params: { countrySlug: string };
}) => {
  const country = (await getCountry(params.countrySlug))[0] as CountryFull;
  console.log(country.name.nativeName);
  const borderedCountries = await getCountryByCode(country.borders);

  return (
    <main className="px-6 md:px-10 lg:px-20 py-10 min-h-screen">
      <BackButton />
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <section id="flag" className="w-full md:w-2/5">
          <Image
            width={500}
            height={400}
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </section>
        <section id="details" className="w-full md:w-3/5">
          <h1 className="text-2xl font-bold mb-6">{country.name.official}</h1>
          <div className="text-sm flex flex-col md:flex-row gap-10">
            <ul className="flex flex-col gap-3 w-full md:w-1/2">
              <li>
                <span className="font-semibold">Native Name: </span>
                {Object.values(country.name.nativeName)[0].official}
              </li>
              <li>
                <span className="font-semibold">Population: </span>
                {Number(country.population).toLocaleString()}
              </li>
              <li>
                <span className="font-semibold">Region: </span>
                {country.region}
              </li>
              <li>
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </li>
              <li>
                <span className="font-semibold">Capital: </span>
                {country.capital[0]}
              </li>
            </ul>
            <ul className="flex flex-col gap-3 w-full md:w-1/2">
              <li>
                <span className="font-semibold">Top Level Domain: </span>
                {country.tld}
              </li>
              <li>
                <span className="font-semibold">Currencies: </span>
                {Object.values(country.currencies)[0].name}
              </li>
              <li>
                <span className="font-semibold">Languages: </span>
                {Object.values(country.languages)[0]}
              </li>
            </ul>
          </div>

          {/* Bordered countries */}
          <div className="mt-10 flex items-center gap-4">
            <h2>Bordered Countries:</h2>
            {borderedCountries.map((country: any) => (
              <Link
                href={`/${country.name.common}`}
                key={country.name.official}
                className="btn btn-primary py-1 shadow"
              >
                {country.name.common}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CountryDetailsPage;
