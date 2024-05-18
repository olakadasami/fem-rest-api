"use client";
import { filterByRegionAction } from "@/actions/filterByRegionAction";
import { useRef } from "react";

export default function Filter() {
  const selectForm = useRef<HTMLFormElement | null>(null);
  const handleSubmit = () => {
    selectForm?.current?.requestSubmit();
  };

  return (
    <form
      action={filterByRegionAction}
      ref={selectForm}
      onChange={handleSubmit}
    >
      <select
        name="filter"
        defaultValue={"filter"}
        className="select select-bordered w-full max-w-sm active:outline-none outline-none"
      >
        <option disabled value={"filter"}>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value={"america"}>America</option>
        <option value={"asia"}>Asia</option>
        <option value={"europe"}>Europe</option>
        <option value={"oceania"}>Oceania</option>
      </select>
    </form>
  );
}
