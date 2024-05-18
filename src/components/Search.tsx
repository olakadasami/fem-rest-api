"use client";
import { searchCountriesAction } from "@/actions/searchCountriesAction";
import { useFormStatus } from "react-dom";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const { pending } = useFormStatus();
  return (
    <form
      name="search"
      action={searchCountriesAction}
      className="flex items-center bg-color-white w-2/5 px-10 gap-6 rounded shadow-lg"
    >
      <FaSearch className="text-color-gray text-xl" />
      <input
        type="search"
        id="search"
        name="search"
        disabled={pending}
        className="w-full h-full py-6 active:outline-none outline-none"
        placeholder="Search for a country..."
      />
    </form>
  );
}
