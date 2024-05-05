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
import { AdvancedMarkerProps } from "@vis.gl/react-google-maps";
import myMarker from "icons/myLocation.png";
import Button from "../components/Button";
import Icon from "../components/Icon";

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

const RealTime = () => {
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  }>();
  let selected = false;
  const openLoading = () => {
    const loading = document.getElementById("open-loading");
    loading?.click();
  };
  openLoading();

  useEffect(() => {
    if (!coordinates && !selected) {
      const getGeolocation = async () => {
        try {
          const position = await Geolocation.getCurrentPosition();
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lng: longitude });
        } catch (error) {
          alert("Could get the location, please enable location services.");
        }
        selected = true;
      };
      getGeolocation();
    }
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* content */}
        <div className="w-full h-full overflow-y-clip relative">
          <div className=" z-10 w-5/6 p-4 pt-0 mt-4 bg-blue absolute top-0 left-[50%] translate-x-[-50%]   border-2 rounded-md border-orange flex ">
            <IonInput className="text-white mt-2 " labelPlacement="floating">
              <div slot="label" className="text-white">
                Search Bus Code...
              </div>
            </IonInput>
            <button onClick={() => {console.log("cliquei")}} className="w-fill border-none h-full mt-6">
              <Icon
                name="br-search-location"
                className="text-orange border-none my-auto mx-1 w-1/5"
              />
            </button>
          </div>
          <button id="open-loading" className="hidden"></button>
          <IonLoading
            trigger={"open-loading"}
            message="Loading map..."
            duration={1000}
            spinner={"circles"}
            showBackdrop={false}
          />
          {/* make it render after promised return a value for location  */}
          {coordinates ? (
            <GoogleMap geolocation={coordinates} />
          ) : (
            <>
              <GoogleMap />
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RealTime;
