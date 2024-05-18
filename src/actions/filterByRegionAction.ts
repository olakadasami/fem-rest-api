"use server";
import { redirect } from "next/navigation";

export async function filterByRegionAction(formData: FormData) {
  const filter = formData.get("filter");
  //   const params = new URLSearchParams(searchParams);

  redirect(`/?filter=${filter}`);
}
