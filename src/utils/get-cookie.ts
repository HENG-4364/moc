"use server";

import { cookies } from "next/headers";

export const getCookie = async () => {
  return (await cookies()).get("token")?.value;
};
