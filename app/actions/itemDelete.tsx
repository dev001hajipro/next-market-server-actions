"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDB from "../utils/database";
import { ItemModel } from "../utils/schemaModels";

export const itemDelete = async (id: string) => {
  "use server";

  try {
    await connectDB();
    await ItemModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw new Error("Error: delete item");
  }

  revalidatePath("/");
  redirect("/");
};
