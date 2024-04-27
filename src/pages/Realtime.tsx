import { IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Map from '../components/Map';
import { Geolocation } from '@capacitor/geolocation';
import { Marker } from '@capacitor/google-maps';
import { useState } from 'react';


const configMap = {
  mapType: 'MAP_TYPE_TERRAIN',
  center: {
    lat: 0,
    lng: 0
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

function addDistToLatLng(lat: number, lng: number, distance: number, angle: number) {
  var R = 6371; // Radius of the Earth in km
  var brng = angle * Math.PI / 180; // Convert bearing to radian
  var lat1 = lat * Math.PI / 180; // Current coords to radians
  var lon1 = lng * Math.PI / 180;
  var lat2 = Math.asin(Math.sin(lat1) * Math.cos(distance / R) + Math.cos(lat1) * Math.sin(distance / R) * Math.cos(brng));
  var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(distance / R) * Math.cos(lat1), Math.cos(distance / R) - Math.sin(lat1) * Math.sin(lat2));
  lat2 = lat2 * 180 / Math.PI; // Convert back in degrees
  lon2 = lon2 * 180 / Math.PI;
  return { lat: lat2, lng: lon2 };
}



const RealTime = () => {
  var markers: Marker[] = [];
  const [location, setLocation] = useState(false);
  const getLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    configMap.center = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
    };
    markers.push(
      {
        coordinate: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
        title: 'My Location',
        iconUrl: 'images/marker.png',
        iconSize: { width: 30, height: 30 },
      }
    )
    setLocation(true);
    //markers for the busses 
    for (let i = 1; i < 10; i++) {
      let m =
      {
        coordinate: addDistToLatLng(coordinates.coords.latitude, coordinates.coords.longitude, 0.25 * i, (Math.random()*360 )* i),
        title: 'Bus ' + i,
        iconUrl: 'images/bus.png',
        iconSize: { width: 30, height: 30 },
      }
      markers.push(m);
    }
    console.log(markers);
  }
  getLocation();


  return (
    <IonPage>
      <IonContent fullscreen>
        {/* content */}
        <div className='w-full h-full overflow-y-clip relative'>
          <div className=" z-10 w-5/6 p-4 pt-0 mt-4 bg-blue absolute top-0 left-[50%] translate-x-[-50%]   border-2 rounded-md border-orange">
            <IonInput className='text-white ' labelPlacement="floating" >
              <div slot="label" className='text-white'>
                Bus Code
              </div>
            </IonInput>
          </div>
          {
            !location ? <div>Getting location...</div> : (<Map config={configMap} markers={markers} />)
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RealTime;
