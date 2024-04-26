import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Map from '../components/Map';
import { Geolocation } from '@capacitor/geolocation';

const configMap = {
  mapType: 'MAP_TYPE_TERRAIN',
  center: {
    lat: 0,
    lng: 0
  },
  disableDefaultUI:true,
  zoom: 11,
  controls: {
    compass: false,
    myLocation: true,
    myLocationButton: true,
    indoorPicker: false,
    zoom: true,
    mapToolbar: false,
    mapTypeControl: false,
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
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ],
};

const RealTime = () => {

  const getLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    configMap.center = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
    };
  }

  getLocation();

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* content */}
        <div className='w-full h-full overflow-y-clip'>
          <Map config={configMap} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RealTime;
