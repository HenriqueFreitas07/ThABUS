
import { IonButtons, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonInput, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';

import Icon from '../components/Icon';
import { GoogleMap, Marker, MarkerClusterer } from '@react-google-maps/api';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useJsApiLoader } from '@react-google-maps/api';
import ScheduleList from './ScheduleLists';
import data from '../data.json'
import { getValue, setValue } from '../getSet'
import { APIProvider, AdvancedMarker, AdvancedMarkerProps, Map, Pin } from '@vis.gl/react-google-maps';
import { ToastInfo } from '../components/Alert';


const ScheduleP: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyABN7IX_NnN3Io35DMphYiHmHg2NsHd7zQ',
    libraries: ['geometry', 'drawing'],
  });

  const [showFilters, setShowFilters] = useState(false);

  const history = useHistory();

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 40.63524260671435,
    lng: -8.655622923645987
  };
  const mapOptions = {
    disableDefaultUI: true // Disable all default UI controls
  };

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);


  return (
    <>
      <IonPage>
        <IonContent fullscreen>


          {isLoaded &&
            <APIProvider apiKey="AIzaSyABN7IX_NnN3Io35DMphYiHmHg2NsHd7zQ" >
              <Map
                mapId={"fcdc1a0f0ad84c5e"}
                defaultCenter={center}
                disableDefaultUI={true}
                gestureHandling={"greedy"}
                defaultZoom={13}
              >
                {/* markers */}
                {
                  getValue(data, "busStops").map((marker: any) => {
                    return (
                      <AdvancedMarker
                        key={marker.id}
                        position={marker.position}
                        onClick={() => ToastInfo(marker.code, marker.name)}

                      >
                        <Icon name="br-stop-circle" className='text-blue text-3xl' />
                      </AdvancedMarker>
                    )
                  })
                }

                <div className='card'>
                  <div>
                    <IonInput type="search" label="Origin: " class="custom"></IonInput>
                  </div>
                  <div>
                    <IonInput type="search" label="Destination: " class="custom"> </IonInput>
                  </div>

                  {showFilters && (
                    <div className='container flex justify-left items-left ml-1.5 '>
                      <IonDatetimeButton datetime="datetime"  ></IonDatetimeButton>
                      <IonModal keepContentsMounted={true}>
                        <IonDatetime id="datetime"
                          formatOptions={{
                            date: {
                              weekday: 'short',
                              month: 'long',
                              day: '2-digit',
                            },
                            time: {
                              hour: '2-digit',
                              minute: '2-digit',
                            },
                          }}
                        ></IonDatetime>
                      </IonModal>
                    </div>
                  )}
                  <div className='container flex justify-between'>
                    <div className='flex buttonLeft items-center'>
                      <button className=" flex flex-row content-center" onClick={() => setShowFilters(!showFilters)} >{!showFilters &&
                        <Icon name="br-square-plus" className='inline-block mr-2 mt-0.5'  ></Icon>}
                        {showFilters &&
                          <Icon name="br-square-minus" className='inline-block mr-2 mt-0.5'  ></Icon>}
                        Filters</button>
                    </div>
                    <button className="buttonRight self-center" onClick={(e) => { setIsOpen(true); }} ><Icon name="br-search-location" className='aspect-square inline-block mt-1'></Icon></button>
                  </div>
                </div>
              </Map>
            </APIProvider>
          }
          <IonModal isOpen={isOpen} ref={modal} >
            <IonHeader className='bg-blue'>
              <IonToolbar className='bg-blue'>
                <IonButtons slot="start">
                  <IonButton onClick={() => { modal.current?.dismiss(); setIsOpen(false) }}>
                    <Icon name="br-angle-left" className='text-orange text-4xl' />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent >
              <ScheduleList close={() => { modal.current?.dismiss(); setIsOpen(false) }} />
            </IonContent>
          </IonModal>

        </IonContent>


      </IonPage>
    </>
  );
};

export default ScheduleP;
