"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDB from "../utils/database";
import { ItemModel } from "../utils/schemaModels";

export const itemCreate = async (formData: FormData) => {
  "use server";
  console.log(formData);
  const itemData = {
    title: formData.get("title"),
    // todo: should the price value be stored as a number instead of a string.
    price: formData.get("price"),
    image: formData.get("image"),
    description: formData.get("description"),
    email: formData.get("email"),
  };

  try {
    await connectDB();
    await ItemModel.create(itemData);
  } catch (error) {
    console.log(error);
    throw new Error("Error: creating item");
  }

  // Purge and revalidate cache when client first show "/" page.
  revalidatePath("/");
  redirect("/");
};
