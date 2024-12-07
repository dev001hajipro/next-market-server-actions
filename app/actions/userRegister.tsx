"use server";

import { redirect } from "next/navigation";
import connectDB from "../utils/database";
import { UserModel } from "../utils/schemaModels";

export const userRegister = async (formData: FormData) => {
  "use server";
  const userData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    await connectDB();
    await UserModel.create(userData);
  } catch (error) {
    console.log(error);
    throw new Error("Error: creating user");
  }

  redirect("/user/login");
};
