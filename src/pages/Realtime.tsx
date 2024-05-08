import {
  IonContent,

  IonInput,

  IonPage,

} from "@ionic/react";
import GoogleMap from "../components/GoogleMap";
import { useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";
import { useParams } from 'react-router-dom';

import Icon from "../components/Icon";


const RealTime = () => {

  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  }>();
  let busCode: string | null | undefined = null;
  const [search, setSearch] = useState<string | null>();
  let selected = false;

  const changeBusCode = () => {
    setSearch(busCode);
  }

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
    busCode = search;
  }, [search]);

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* content */}
        <div className="w-full h-full overflow-y-clip relative">
          <div className=" z-10 w-5/6 p-4 pt-0 mt-4 bg-blue absolute top-0 left-[50%] translate-x-[-50%]   border-2 rounded-md border-orange flex ">
            <IonInput onIonChange={(event: any) => { busCode = event.detail.value; }} className="text-white mt-2 " color="warning" labelPlacement="floating">
              <div slot="label" className="text-white">
                Search Bus Code
                (XX-XXXX)
              </div>
            </IonInput>
            <button onClick={changeBusCode} className="w-fill border-none h-full mt-6 focus:border-none ">
              <Icon
                name="br-search-location"
                className="text-orange border-none my-auto mx-1 w-1/5 text-2xl"
              />
            </button>
          </div>
          <button id="open-loading" className="hidden"></button>
          {/* <IonLoading
            trigger={"open-loading"}
            message="Loading map..."
            duration={1000}
            spinner={"circles"}
            showBackdrop={false}
          /> */}
          {/* make it render after promised return a value for location  */}
          <GoogleMap geolocation={coordinates} search={search} />

        </div>
      </IonContent>
    </IonPage>
  );
};

export default RealTime;
