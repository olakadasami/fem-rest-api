"use server";
import { redirect } from "next/navigation";

export async function searchCountriesAction(formData: FormData) {
  const country = formData.get("search")?.toString();

  redirect(`/?country=${country}`);
}
