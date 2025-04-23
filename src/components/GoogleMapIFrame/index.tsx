"use client";

import { settings } from "@/lib/settings";
import { useState, useEffect } from "react";

export type GoogleMapIFrameProps = {
  googleMapURL: string;
};

const GoogleMapIFrame = ({ googleMapURL }: GoogleMapIFrameProps) => {
  const [embedURL, setEmbedURL] = useState<any>(null);

  useEffect(() => {
    async function processUrl() {
      if (!googleMapURL) return;

      let finalURL = googleMapURL;

      // 1. Expand shortened Google Maps URLs
      if (googleMapURL.includes("maps.app.goo.gl")) {
        finalURL = await fetchRedirectUrl(googleMapURL);
      }

      // 2. Extract coordinates from final URL
      try {
        const urlObj = new URL(finalURL);
        const params = new URLSearchParams(urlObj.search);
        const coordinates = params.get("q");

        if (coordinates) {
          const [lat, lng] = coordinates.split(",").map(Number);
          setEmbedURL(
            `https://www.google.com/maps/embed/v1/place?key=${settings?.googleMapApiKey}&q=${lat},${lng}`
          );
        }
      } catch (error) {
        console.error("Error processing Google Maps URL:", error);
      }
    }

    processUrl();
  }, [googleMapURL]);

  async function fetchRedirectUrl(shortUrl: any) {
    try {
      const response = await fetch(shortUrl, {
        method: "HEAD",
        redirect: "follow",
      });
      return response.url;
    } catch (error) {
      console.error("Error expanding shortened URL:", error);
      return shortUrl;
    }
  }

  return embedURL ? (
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: 0,
      }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={embedURL}
    ></iframe>
  ) : (
    <p>Loading Map...</p>
  );
};

export default GoogleMapIFrame;
