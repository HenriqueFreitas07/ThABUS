import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonModal, IonTab, IonText } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonInput, IonItem, IonRouterLink } from '@ionic/react';
import Icon from '../components/Icon';
import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useHistory } from 'react-router-dom';
import { useJsApiLoader } from '@react-google-maps/api';



type ScheduleListProps = {
  close: () => void;
};
const ScheduleList = ({ close }: ScheduleListProps) => {

  const history = useHistory();

  const cards =
    [
      { arrive: "17:45 PM", leave: '17:00 PM', code: 'QW-4720', stop: "Paragem Senh..." },
      { arrive: "18:00 PM", leave: '17:20 PM', code: 'QW-8902', stop: "Largo da Bei..." },
      { arrive: "19:00 PM", leave: '18:25 PM', code: 'TT-7777', stop: "Fonte Ferrad..." },
      { arrive: "20:00 PM", leave: '19:00 PM', code: 'TB-1132', stop: "Avenida Dout..." },
      { arrive: "20:30 PM", leave: '19:35 PM', code: 'HF-1144', stop: "Praça do Pei..." },
      { arrive: "21:00 PM", leave: '20:00 PM', code: 'FA-1199', stop: "Rua da Braga..." },
    ];



  const mapContainerStyle = {
    width: '100%',
    height: '300px',

  };

  const startLocation = { lat: 2 };
  const destinationLocation = { lat: 40.643752439166505, lng: -8.641114860961688 };

  const mapOptions = {
    disableDefaultUI: true // Disable all default UI controls
  };

  const center = {
    lat: 40.63064779667318,
    lng: -8.64842375528739
  };

  const pathCoordinates = [
    startLocation,
    destinationLocation
  ];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyABN7IX_NnN3Io35DMphYiHmHg2NsHd7zQ',
    libraries: ['geometry', 'drawing'],
  });






  return (
    <>
      <IonCard className='flex flex-nowrap py-4 bg-white m-0 rounded-none border-0 place-items-center p-15 relative' >
        <IonText className=' p-3 pl-2 text-center flex-1 text-black text-xl'>Residências Santiago</IonText>
        <Icon name="br-route" className='text-center flex-1 text-orange text-4xl py-1/2  m-4' />
        <IonText className=' p-3 text-center flex-1 text-black text-xl mr-3'>Estação Aveiro</IonText>
      </IonCard>



      {isLoaded && (<GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={mapOptions}
      >
        <Marker
          position={destinationLocation}
        />

      </GoogleMap>)}



      <IonCard className=' flex  items-center justify-center  py-4 bg-white m-0 rounded-none border-0 border-b-0 outline-0' >
        <Icon name="br-list" className='text-orange text-xl mr-2' />
        <IonText className=' text-black text-2xl mb-1.5'>Available Schedules</IonText>
      </IonCard>
      <div className="overflow-y-auto px-4 ">

        {cards.map((card, index) => (
          <IonCard key={index} className="rounded-lg bg-cyan-400 mb-4 p-0">
            <IonCardContent className="flex justify-between items-center p-0 pl-3 pr-0">
              {/* Left side (hours) */}
              <div className="flex flex-col items-start justify-between h-full">
                <div className="flex items-center text-white">
                  <Icon name="br-calendar-days" className='text-black text-xl mr-2 ' />
                  <IonText className='pb-1 text-xl' >{card.leave}</IonText>
                </div>
                <div className="flex items-center text-white">
                  <Icon name="br-calendar-days" className='text-black text-xl mr-2' />
                  <IonText className='pb-1 text-xl'>{card.arrive}</IonText>
                </div>
              </div>
              {/* Right side (info) */}
              <div className="flex flex-col justify-between w-1/2">
                <div className="rounded-lg flex items-center text-white mt-2 pl-2 m-0">
                  <Icon name="br-bus" className='text-black text-xl ml-2 mr-7' />
                  <IonText className='text-xl pb-1 pt-1'>{card.code}</IonText>
                </div>
                <IonButton className="bg-blue-800 text-white rounded-none flex items-center p-0 m-0"
                  onClick={(e) => { close();  document.getElementById("tab-button-/realtime")?.click() }}>
                  <div className="flex items-center w-full">
                    <Icon name="br-bus" className='text-black text-xl mr-2 mt-1' />
                    <IonText className='text-l pb-1 pt-1'>{card.stop}


                    </IonText>
                  </div>
                </IonButton>
              </div>

            </IonCardContent>
          </IonCard>
        ))}
      </div>
    </>
  );
};

export default ScheduleList;
