export const settings = {
  websiteId: Number(process.env.NEXT_PUBLIC_WEBSITE_ID), // connect to database data by website ID
  sasApi: process.env.NEXT_PUBLIC_SAS_API_URL, // SAS API URL
  api: process.env.NEXT_PUBLIC_API_URL || "", // MoC API URL
  googleMapApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // google map API key
  jwtSecret: process.env.NEXT_PUBLIC_SECRET_KEY || "",
};