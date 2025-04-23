"use client";

import { GoogleMap, Marker, useLoadScript, Circle, StandaloneSearchBox } from "@react-google-maps/api";
import { useMemo, useState, useEffect, useRef } from "react";
import "./style.css";
import { LocateFixed } from "lucide-react";

type GoogleMapsProps = {
  radius: number;
  setLatitude: (lat: number) => void;
  setLongitude: (lng: number) => void;
  style?: string;
  address: string;
  setAddress: (address: string) => void;
  latitude: number;
  longitude: number;
  isDisabled?: boolean;
};

const GoogleMaps: React.FC<GoogleMapsProps> = ({
  isDisabled,
  radius,
  setLatitude,
  setLongitude,
  style = "",
  address,
  setAddress,
  latitude,
  longitude,
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

  const changeCoordinate = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setLatitude(lat);
      setLongitude(lng);
    }
  };

  useEffect(() => {
    if (map) {
      map.panTo({ lat: latitude, lng: longitude });
    }
  }, [latitude, longitude, map]);

  const inputRef = useRef<google.maps.places.SearchBox | null>(null);

  const handlePlaceChanged = () => {
    if (inputRef.current) {
      const places = inputRef.current.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        setAddress(place.formatted_address || "");
        setLatitude(place.geometry?.location?.lat() || latitude);
        setLongitude(place.geometry?.location?.lng() || longitude);
      }
    }
  };

  return (
    <div className="w-full h-96">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={17}
            onLoad={(map) => setMap(map)}
            options={{
              mapTypeControl: false
            }}
          >
            <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
              <div className="absolute  ml-4 mt-[10px] w-full">
                <input
                  disabled={isDisabled}
                  type="text"
                  className={`form-control text-black rounded-full bg-white ${style}`}
                  value={address}
                  placeholder="Search Location..."
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </StandaloneSearchBox>
            {!isDisabled && (
              <button
                className=" flex justify-center items-center lg:w-8 lg:h-8 w-8 h-8 transition duration-300 rounded-full hover:bg-stone-200 bg-stone-100 border-2 border-gray-200 absolute right-[60px] top-[17px]"
                onClick={() => map?.panTo({ lat: latitude, lng: longitude })}
              >
                <span className="text-xs text-gray-600">
                  <LocateFixed />
                </span>
              </button>
            )}

            <Marker draggable position={{ lat: latitude, lng: longitude }} onDragEnd={changeCoordinate} />
          </GoogleMap>
        </>
      )}
    </div>
  );
};

export default GoogleMaps;
