import { Country } from "@/types/country.types";
import Image from "next/image";

export const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="w-60 shadow-lg rounded-md bg-primary">
      {/* Flag */}
      <div className="w-60 h-40 overflow-hidden object-cover">
        <Image
          src={country.flags.png}
          width={240}
          height={128}
          alt={country.flags.alt}
        />
      </div>

      <div className="p-4">
        {/* Name */}
        <h3 className="font-bold text-md">{country.name.official}</h3>

        <ul className="mt-2 text-sm">
          {/* population */}
          <li>
            <span className="font-semibold">Population: </span>{" "}
            {Number(country.population).toLocaleString()}
          </li>
          {/* region */}
          <li>
            <span className="font-semibold">Region: </span>
            {country.region}
          </li>
          {/* capital */}
          <li>
            <span className="font-semibold">Capital: </span>
            {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};
