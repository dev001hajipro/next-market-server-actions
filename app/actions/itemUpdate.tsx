"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDB from "../utils/database";
import { ItemModel } from "../utils/schemaModels";

export const itemUpdate = async (id: string, formData: FormData) => {
  "use server";
  const itemData = {
    title: formData.get("title"),
    price: formData.get("price"), // todo: is correct a string?
    image: formData.get("image"),
    description: formData.get("description"),
    email: formData.get("email"),
  };

  try {
    await connectDB();
    await ItemModel.updateOne({ _id: id }, itemData);
  } catch (error) {
    console.log(error);
    throw new Error("Error: update item");
  }

  revalidatePath("/");
  redirect("/");
};
