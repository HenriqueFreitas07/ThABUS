import { IonContent, IonInput, IonPage } from "@ionic/react";
import GoogleMap from "../components/GoogleMap";
import { createRef, useEffect, useState } from "react";
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
  const ref = createRef<HTMLIonInputElement>();
  const [search, setSearch] = useState<string | null>();
  let selected = false;
  const allCodes = data.busStops.map((busStop) => busStop.code);

  const changeBusCode = () => {
    const busCode = ref.current!.value as string;
    if (!allCodes.includes(busCode)) {
      AlertError("Bus Code not found");
      setSearch(null);
      return;
    }
    setSearch(busCode);
    //clean the input
    writeToLocalStorage("search", null);
  };

  const passingCode = (): string => {
    const busCodeTemp = readFromLocalStorage("search");
    if (busCodeTemp) {
      return busCodeTemp;
    }
    return "";
  };

  const fillBusCode = (code: string, name: string) => {
    //set the input with the code
    ref.current!.value = code;
    console.log(ref.current);
    ToastInfo(code, name);
  };

  useEffect(() => {
    if (!coordinates && !selected) {
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
              ref={ref}
              value={passingCode()}
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
