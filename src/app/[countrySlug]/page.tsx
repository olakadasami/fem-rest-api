import BackButton from "@/components/BackButton";
import Image from "next/image";

async function getCountry(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );

  return res.json();
}

const CountryDetailsPage = async ({
  params,
}: {
  params: { countrySlug: string };
}) => {
  const country = await getCountry(params.countrySlug);

  return (
    <main className="px-20 py-10">
      <BackButton />
      <div className="flex gap-10 mt-10">
        <section id="flag" className="w-2/5">
          <Image
            width={500}
            height={400}
            src={country[0].flags.png}
            alt={country[0].flags.alt}
          />
        </section>
        <section id="details" className="w-3/5">
          <h1 className="text-2xl font-bold mb-6">
            {country[0].name.official}
          </h1>
          <div className="text-sm flex gap-10">
            <ul className="flex flex-col gap-3 w-1/2">
              <li>
                <span className="font-semibold">Native Name: </span>
                {Object.values(country[0].name.nativeName)[0].official}
              </li>
              <li>
                <span className="font-semibold">Population: </span>
                {Number(country[0].population).toLocaleString()}
              </li>
              <li>
                <span className="font-semibold">Region: </span>
                {country[0].region}
              </li>
              <li>
                <span className="font-semibold">Sub Region: </span>
                {country[0].subregion}
              </li>
              <li>
                <span className="font-semibold">Capital: </span>
                {country[0].capital[0]}
              </li>
            </ul>
            <ul className="flex flex-col gap-3 w-1/2">
              <li>
                <span className="font-semibold">Top Level Domain: </span>
                {country[0].tld}
              </li>
              <li>
                <span className="font-semibold">Currencies: </span>
                {Object.values(country[0].currencies)[0].name}
              </li>
              <li>
                <span className="font-semibold">Languages: </span>
                {Object.values(country[0].languages)[0]}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CountryDetailsPage;
