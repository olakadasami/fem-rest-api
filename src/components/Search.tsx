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
      className="flex bg-primary items-center w-full md:w-2/5 px-10 gap-6 rounded shadow-lg"
    >
      <FaSearch className="text-color-gray text-xl" />
      <input
        type="search"
        id="search"
        name="search"
        disabled={pending}
        className="w-full h-full bg-primary py-6 input active:outline-none focus:outline-none focus:border-none"
        placeholder="Search for a country..."
      />
    </form>
  );
}
