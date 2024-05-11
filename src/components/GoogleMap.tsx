import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  AdvancedMarkerProps,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import Icon from "./Icon";
import { AlertInfo, ToastInfo } from "./Alert";

<script src="https://use.fontawesome.com/releases/v6.2.0/js/all.js"></script>
const icon = document.createElement("div");

icon.innerHTML = '<i class="fa fa-pizza-slice fa-lg"></i>';

type GoogleMapProps = {
  // Define props for the component here
  geolocation?: { lat: number; lng: number };
  search?: string | null;
};
const stops = [
  {
    id: 1,
    name: "Aveiro Hospital Bus Stop",
    pinBg: "#333A76",
    glyphColor: "#FFFFFF",
    boderColor: "#FFFFFF",
    code: "QW-4723",
    position: { lat: 40.635, lng: -8.659 },
    scale: 1
  },
  {
    id: 2,
    name: "Aveiro Train Station Bus Stop",
    pinBg: "#333A74",
    glyphColor: "#FFFFFF",
    boderColor: "#FFFFFF",
    code: "QW-4721",
    position: { lat: 40.64427, lng: -8.64554 },
    scale: 1
  },
  {
    id: 3,
    name: "Aveiro University Bus Stop",
    pinBg: "#333A75",
    glyphColor: "#FFFFFF",
    boderColor: "#FFFFFF",
    code: "QW-4722",
    position: { lat: 40.629087, lng: -8.65787 },
    scale: 1
  },
  {
    id: 4,
    name: "Casa das Framboesas",
    pinBg: "#333A78",
    glyphColor: "#FFFFFF",
    boderColor: "#FFFFFF",
    code: "QW-4725",
    position: { lat: 40.6441, lng: -8.6505 },
    scale: 1
  },
  {
    id: 5,
    name: "Fonte de Esgueira",
    pinBg: "#333A82",
    glyphColor: "#FFFFFF",
    boderColor: "#FFFFFF",
    code: "QW-4729",
    position: { lat: 40.6385, lng: -8.6342 },
    scale: 1
  },
  {
    id: 6,
    name: "Igreja de Esgueira",
    pinBg: "#333A81",
    glyphColor: "#FFFFFF",
    boderColor: "#FFFFFF",
    code: "QW-4728",
    position: { lat: 40.6399, lng: -8.6364 },
    scale: 1
  },
  {
    id: 7,
    name: "Gen. Costa Cascais",
    pinBg: "#333A80",
    glyphColor: "#FFFFFF",
    boderColor: "#FFFFFF",
    code: "QW-4727",
    position: { lat: 40.6445, lng: -8.6533 },
    scale: 1
  },
  {
    id: 8,
    name: "Aveiro Old Prison Bus Stop",
    pinBg: "#333A77",
    glyphColor: "#FFFFFF",
    boderColor: "#FFFFFF",
    code: "QW-4724",
    position: { lat: 40.6415, lng: -8.65358 },
    scale: 1
  },
  {
    id: 9,
    name: "Aveiro Forum Bus Stop",
    pinBg: "#333A73",
    glyphColor: "#FFFFFF",
    boderColor: "#FFFFFF",
    code: "QW-4720",
    position: { lat: 40.64071895550601, lng: -8.652758379697358 },
    scale: 1
  },
  {
    id: 10,
    name: "Tanques de Esgueira",
    pinBg: "#333A79",
    glyphColor: "#FFFFFF",
    boderColor: "#FFFFFF",
    code: "QW-4726",
    position: { lat: 40.6387, lng: -8.6341 },
    scale: 1
  },
];

export default function GoogleMap({ geolocation, search }: GoogleMapProps) {
  const [newCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 40.63069610757116,
    lng: -8.657316587947273,
  });

  let Allmarkers: AdvancedMarkerProps[] = [];
  let busStops = stops;

  const generateRandomMarkers = () => {
    for (let i = 0; i < 4; i++) {
      const { lat, lng } = addDistToLatLng(
        newCenter.lat,
        newCenter.lng,
        0.8 + Math.random() * 0.3,
        (i * 45) * (Math.random() * 360)
      );
      const marker: AdvancedMarkerProps = {
        position: { lat, lng },
        title: `QW-${i + 4720}`,
      };

      Allmarkers.push(marker);
    }

  }
  generateRandomMarkers();

  if (search != null) {
    const busStop = busStops.find((busStop) => busStop.code === search);
    if (busStop) {
      busStops = []
      busStops.push({
        id: busStop.id,
        position: busStop.position,
        name: busStop.name,
        pinBg: "",
        glyphColor: "#FFFFFF",
        boderColor: "#FFFFFF",
        code: busStop.code,
        scale: 1.5,
      });
      let m = Allmarkers.find((marker) => marker.title === busStop.code) as AdvancedMarkerProps
      Allmarkers = [m]

    }
    else {
      busStops = stops
      generateRandomMarkers();
    }
  }
  return (
    <>
      <APIProvider apiKey="AIzaSyABN7IX_NnN3Io35DMphYiHmHg2NsHd7zQ">
        <Map
          mapId={"fcdc1a0f0ad84c5e"}
          defaultCenter={!geolocation ? newCenter : geolocation}
          disableDefaultUI={true}
          gestureHandling={"greedy"}
          defaultZoom={13}
        >
          <AdvancedMarker
            position={!geolocation ? newCenter : geolocation}
            onClick={() => console.log("Marker clicked")}
          >
            <Pin />
          </AdvancedMarker>
          {Allmarkers?.map((marker, index) => (
            <AdvancedMarker
              key={index}
              position={marker.position}
            >

              <Icon name="br-bus" className='text-orange text-3xl   ' />
            </AdvancedMarker>
          ))}
          {busStops?.map((marker, index) => (
            <AdvancedMarker
            key={index}
            position={marker.position}
            onClick={() => ToastInfo(marker.code, marker.name)}
            >
            <Icon name="br-stop-circle" className='text-blue text-3xl   ' />

            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </>
  );
}

function addDistToLatLng(
  lat: number,
  lng: number,
  distance: number,
  angle: number
) {
  var R = 6371; // Radius of the Earth in km
  var brng = (angle * Math.PI) / 180; // Convert bearing to radian
  var lat1 = (lat * Math.PI) / 180; // Current coords to radians
  var lon1 = (lng * Math.PI) / 180;
  var lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(distance / R) +
    Math.cos(lat1) * Math.sin(distance / R) * Math.cos(brng)
  );
  var lon2 =
    lon1 +
    Math.atan2(
      Math.sin(brng) * Math.sin(distance / R) * Math.cos(lat1),
      Math.cos(distance / R) - Math.sin(lat1) * Math.sin(lat2)
    );
  lat2 = (lat2 * 180) / Math.PI; // Convert back in degrees
  lon2 = (lon2 * 180) / Math.PI;
  return { lat: lat2, lng: lon2 };
}
