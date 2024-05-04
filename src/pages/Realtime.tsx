import {
  IonContent,
  IonHeader,
  IonInput,
  IonLoading,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import GoogleMap from "../components/GoogleMap";
import { Suspense, useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

const configMap = {
  mapType: "MAP_TYPE_TERRAIN",
  center: {
    lat: 0,
    lng: 0,
  },
  enableHighAccuracy: false,
  disableDefaultUI: true,
  zoom: 15,
  controls: {
    compass: false,
    myLocation: true,
    myLocationButton: true,
    indoorPicker: true,
    zoom: true,
    mapTypeControl: true,
    streetViewControl: false,
    pan: true,
  },
  gestures: {
    scroll: true,
    tilt: true,
    zoom: true,
    rotate: true,
  },
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ],
};

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

const RealTime = () => {
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  }>();
  const openLoading = () => {
    const loading = document.getElementById("open-loading");
    loading?.click();
  };
  openLoading();

  useEffect(() => {
    const getGeolocation = async () => {
      try {
        const position = await Geolocation.getCurrentPosition();
        const { latitude, longitude } = position.coords;
        setCoordinates({ lat: latitude, lng: longitude });
      } catch (error) {
        alert("Could get the location, please enable location services.");
      }
    };

    getGeolocation();
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* content */}
        <div className="w-full h-full overflow-y-clip relative">
          <div className=" z-10 w-5/6 p-4 pt-0 mt-4 bg-blue absolute top-0 left-[50%] translate-x-[-50%]   border-2 rounded-md border-orange">
            <IonInput className="text-white " labelPlacement="floating">
              <div slot="label" className="text-white">
                Bus Code
              </div>
            </IonInput>
          </div>
          {/* make it render after promised return a value for location  */}
          {coordinates ? (
            <GoogleMap geolocation={coordinates} />
          ) : (
            <>
              <button id="open-loading" className="hidden"></button>
              <IonLoading
                trigger={"open-loading"}
                message="Getting your location..."
                duration={5000}
                spinner={"circles"}
                showBackdrop={false}
              />
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RealTime;
