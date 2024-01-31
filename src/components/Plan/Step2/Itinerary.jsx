import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function Itinerary({ itinerary }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPKEY,
  });

  const [directionResponse, setDirectionResponse] = useState();
  const [centerLatLan, setCenterLatLan] = useState();

  useEffect(() => {
    async function calculateRoute() {
      if (isLoaded) {
        if (itinerary.length > 1) {
          const directionService = new google.maps.DirectionsService();
          const result = await directionService.route({
            origin: itinerary[0].address,
            destination: itinerary[itinerary.length - 1].address,
            waypoints: itinerary.slice(1, -1).map((attraction) => {
              return { location: attraction.address };
            }),
            travelMode: google.maps.TravelMode.DRIVING,
          });
          setDirectionResponse(result);
        } else {
          setDirectionResponse(null);
          if (itinerary.length == 1) {
            const geocoder = new google.maps.Geocoder();
            const geocode = await geocoder.geocode({
              address: itinerary[0].address,
            });
            setCenterLatLan(geocode.results[0].geometry.location);
          }
        }
      }
    }
    calculateRoute();
  }, [isLoaded, itinerary]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={centerLatLan ? centerLatLan : center}
      zoom={9}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
      options={{
        mapTypeControl: false,
        streetViewControl: false,
      }}
    >
      {itinerary.length == 1 && <Marker position={centerLatLan} />}
      {itinerary.length > 1 && directionResponse && (
        <DirectionsRenderer directions={directionResponse} />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}
