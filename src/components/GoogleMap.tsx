import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  AdvancedMarkerProps,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

type GoogleMapProps = {
  // Define props for the component here
  geolocation: { lat: number; lng: number };
  markers?:AdvancedMarkerProps[]
};

export default function GoogleMap({ geolocation }: GoogleMapProps) {
  const [newCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  // Define event handlers
  const handleMapDoubleClick = (event: any) => {
    // Get the new center from the double-clicked location
    const newCenter = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    // Update the state to set the new center
    setMapCenter(newCenter);
  };

  return (
    <>
      <APIProvider apiKey="AIzaSyABN7IX_NnN3Io35DMphYiHmHg2NsHd7zQ">
        <Map
          zoom={13}
          mapId={"fcdc1a0f0ad84c5e"}
          defaultCenter={geolocation}
          disableDefaultUI={true}
          initialViewState={{
            latitude: 37.7749295,
            longitude: -122.4194155,
            zoom: 10,
          }}
          onDblclick={handleMapDoubleClick}
        >
          <AdvancedMarker position={{ lat: 37.7749295, lng: -122.4194155 }}>
            <Pin />
            <InfoWindow>
              <div>San Francisco</div>
            </InfoWindow>
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </>
  );
}
