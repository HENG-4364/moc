"use client";

import { useState } from "react";
import GoogleMaps from "./Maps";

export default function MapInterface({ isDisabled }: any) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    latitude: null,
    longitude: null,
    radius: 500,
  });

  const [latitude, setLatitude] = useState(11.5586684);
  const [longitude, setLongitude] = useState(104.8643779);
  const [address, setAddress] = useState("");

  return (
    <div >
      <div className="flex flex-col w-full items-center gap-y-4">

        <div className="w-full h-96">
          <GoogleMaps
            isDisabled={isDisabled}
            style="w-[60%] lg:w-[50%] px-4 py-2 border-b-[1px] border-[#E5E5E3]"
            address={address}
            setAddress={setAddress}
            radius={form.radius}
            latitude={latitude}
            longitude={longitude}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
          />
        </div>
        {/* <div className="flex flex-col">
          <span className="text-xl">Address: {address}</span>
          <span className="text-xl">Latitude: {latitude}</span>
          <span className="text-xl">Longitude: {longitude}</span>
        </div>
        <div className="mt-4">
          <a
            href={`https://www.google.com/maps?q=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {`https://www.google.com/maps?q=${latitude},${longitude}`}
          </a>
        </div> */}
      </div>
    </div>
  );
}
