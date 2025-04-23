// import { getMe } from "@/actions/get-me";
import { SignJWT, jwtVerify } from "jose";
import { cookies, type UnsafeUnwrappedCookies } from "next/headers";
import { redirect } from "next/navigation";
import { settings } from "../settings";
import { getMe } from "./get-me";

const secretKey = settings.jwtSecret;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1hr")
    .sign(key);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify<any>(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function verifySession() {
  const { data } = await getMe();
  return {
    data,
  };
}

export const deleteCookies = () => {
  (cookies() as unknown as UnsafeUnwrappedCookies).delete("token");
  redirect("/business-directory");
};
