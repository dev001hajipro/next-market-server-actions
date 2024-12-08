import { jwtVerify } from "jose";
import { cookies } from "next/headers";

// todo: I don't want to return null. should to rewrite nullsafety.
export const getToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  const secretKey = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET);
  const { payload } = await jwtVerify(token, secretKey);
  return payload as { email: string };
};
