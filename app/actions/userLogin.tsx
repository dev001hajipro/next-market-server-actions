"use server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import connectDB from "../utils/database";
import { UserModel } from "../utils/schemaModels";
import { redirect } from "next/navigation";

const config = {
  // 1 day. if you spend more than 1 day, the cookie will be deleted
  maxAge: 60 * 60 * 24,
  httpOnly: true,
};

export const userLogin = async (
  prevState: { message: string },
  formData: FormData
) => {
  const userData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    await connectDB();
    const user = await UserModel.findOne({ email: userData.email });
    console.log(user);
    if (user) {
      if (user.password === userData.password) {
        // JWT
        const secretKey = new TextEncoder().encode(
          process.env.NEXT_PUBLIC_SECRET
        );
        const payload = { email: user.email };
        const token = await new SignJWT(payload)
          .setProtectedHeader({ alg: "HS256" })
          .setExpirationTime("1d")
          .sign(secretKey);
        //console.log(token)
        const cookieStore = await cookies();
        cookieStore.set("token", token, config);
        //return { message: "login successfully" };
      } else {
        return { message: "login failure" };
      }
    } else {
      return { message: "please register first" };
    }
  } catch (error) {
    console.log(error);
    //throw new Error("Error: creating user");
    return { message: "login failure" };
  }

  redirect("/");
};
