import { IonContent, IonInput, IonPage } from "@ionic/react";
import GoogleMap from "../components/GoogleMap";
import { useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

import Icon from "../components/Icon";
import { AlertError, ToastInfo } from "../components/Alert";
import { readFromLocalStorage, writeToLocalStorage } from "../storage";
import data from "../data.json";

const RealTime = () => {
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  }>();

  const [search, setSearch] = useState<string | null>();
  const [busCode, setBusCode] = useState<string>("");
  let selected = false;
  const allCodes = data.busStops.map((busStop) => busStop.code);

  const changeBusCode = () => {
    if (!allCodes.includes(busCode)) {
      AlertError("Bus Code not found");
      setSearch(null);
      return
    }
    console.log(busCode);
    setSearch(busCode);
    writeToLocalStorage("search", null);
  };

  const passingCode = (): void => {
    setBusCode(readFromLocalStorage("search"));
  };

  const fillBusCode = (code: string, name: string) => {
    setBusCode(code)
    changeBusCode();
    ToastInfo(code, name);
  };

  useEffect(() => {
    if (!coordinates && !selected) {
      console.log(coordinates, selected);
      const getGeolocation = async () => {
        try {
          const position = await Geolocation.getCurrentPosition();
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lng: longitude });
        } catch (error) {
          AlertError("Geolocation Unavailable");
        }
        selected = true;
      };
      getGeolocation();
      passingCode();
    }
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* content */}
        <div className="w-full h-full overflow-y-clip relative">
          <div className=" z-10 w-5/6 p-4 pt-0 mt-4 bg-blue absolute top-0 left-[50%] translate-x-[-50%]   border-2 rounded-md border-orange flex ">
            <IonInput
              onIonChange={(event: any) => {
                setBusCode(event.detail.value);
              }}
              value={busCode}
              className="text-white mt-2 "
              color="warning"
              labelPlacement="floating"
            >
              <div slot="label" className="text-white">
                Search Bus Code
              </div>
            </IonInput>
            <button
              onClick={changeBusCode}
              className="w-fill border-none h-full mt-6 focus:border-none "
            >
              <Icon
                name="br-search-location"
                className="text-orange border-none my-auto mx-1 w-1/5 text-2xl"
              />
            </button>
          </div>
          <button id="open-loading" className="hidden"></button>

          {/* make it render after promised return a value for location  */}
          <GoogleMap
            geolocation={coordinates}
            search={search}
            onClickMarker={fillBusCode}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RealTime;
