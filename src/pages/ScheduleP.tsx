import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonInput, IonItem, IonDatetime,IonDatetimeButton,IonModal } from '@ionic/react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from '../components/Icon';
import { GoogleMap, LoadScript } from '@react-google-maps/api'; 
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';





const ScheduleP: React.FC = () => {


  const [showFilters, setShowFilters] = useState(false);
  const [redirect, setRedirect] = useState(false);
  

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 40.63524260671435,
    lng:  -8.655622923645987
  };
  const mapOptions = {
    disableDefaultUI: true // Disable all default UI controls
  };
  const handleButtonClick = () => {
    // Set the state to true to trigger the redirection
    setRedirect(true);
  };

  if (redirect) {
    // Redirect to the desired route when the state is true
    return <Redirect to="/ScheduleLists" />;
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        
        <LoadScript googleMapsApiKey="AIzaSyABN7IX_NnN3Io35DMphYiHmHg2NsHd7zQ">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            options={mapOptions}
          >
            <div className='card'>
              <div  >
                <IonInput type="search" label="Origin: " class="custom"></IonInput>
              </div>
              <div>
                <IonInput type="search" label="Destination: " class="custom"> </IonInput>
              </div>
             
              {showFilters && (
                <div className='container flex justify-left items-left ml-1.5 '>
                   <IonDatetimeButton  datetime="datetime"  ></IonDatetimeButton>
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
                        }, }}
                      ></IonDatetime>
                    </IonModal>
                </div>
              )}
               <div className='container flex justify-between'>
              <div className='flex buttonLeft items-center'>
                <button className=" flex flex-row content-center"onClick={() => setShowFilters(!showFilters)} >{!showFilters &&  
                <Icon name="br-square-plus" className='inline-block mr-2 mt-0.5'  ></Icon>}
                {showFilters &&  
                <Icon name="br-square-minus" className='inline-block mr-2 mt-0.5'  ></Icon>}
                Filters</button>
              </div>  
                <button className="buttonRight self-center" onClick={handleButtonClick} ><Icon name="br-search-location" className='aspect-square inline-block mt-1'></Icon></button>
              </div>
            </div>
          </GoogleMap>
        </LoadScript>

      </IonContent>

      
    </IonPage>
  );
};

export default ScheduleP;
