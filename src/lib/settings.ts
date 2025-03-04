export const settings = {
  websiteId: Number(process.env.NEXT_PUBLIC_WEBSITE_ID),
  isUserAuth: process.env.NEXT_PUBLIC_IS_USER_AUTH === "true",
  sasApi: process.env.NEXT_PUBLIC_SAS_API_URL,
  api: process.env.NEXT_PUBLIC_API_URL || "",
  jwtSecret: process.env.NEXT_PUBLIC_SECRET_KEY || "",
  googleMapApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
};
