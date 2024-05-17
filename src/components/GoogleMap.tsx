import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  AdvancedMarkerProps,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import Icon from "./Icon";
import data from "../data.json";

<script src="https://use.fontawesome.com/releases/v6.2.0/js/all.js"></script>
const icon = document.createElement("div");

icon.innerHTML = '<i class="fa fa-pizza-slice fa-lg"></i>';

type GoogleMapProps = {
  // Define props for the component here
  geolocation?: { lat: number; lng: number };
  search?: string | null;
  onClickMarker: (code: string,name:string) => void;
};


export default function GoogleMap({ geolocation, search, onClickMarker }: GoogleMapProps) {
  const [newCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 40.63069610757116,
    lng: -8.657316587947273,
  });

  let Allmarkers: AdvancedMarkerProps[] = [];
  let busStops = data.busStops;


  const generateRandomMarkers = () => {
    for (let i = 0; i < busStops.length; i++) {
      const { lat, lng } = addDistToLatLng(
        newCenter.lat,
        newCenter.lng,
        0.8 + Math.random() * 0.3,
        (i * 45) * (Math.random() * 360)
      );
      const marker: AdvancedMarkerProps = {
        position: { lat, lng },
        title: `${busStops[i].code}`,
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
      busStops = data.busStops;
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
              onClick={()=>{onClickMarker(marker.code,marker.name)}}
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
