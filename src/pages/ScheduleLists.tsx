import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonTabBar,IonTabButton, IonModal, IonTab, IonText} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonInput, IonItem,IonRouterLink } from '@ionic/react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from '../components/Icon';
import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api'; 
import { Redirect } from 'react-router-dom';
import { Polyline } from '@react-google-maps/api';

const ScheduleList: React.FC = () => {
  const [isOpen] = useState(true);

  const mapContainerStyle = {
    width: '100%',
    height: '100%', 
    
  };
  
  const startLocation = { lat: 40.63092930010656, lng: -8.654493867799525 };
  const destinationLocation = { lat: 40.643752439166505, lng:  -8.641114860961688 }; 

  const mapOptions = {
    disableDefaultUI: true // Disable all default UI controls
  };
 
  const center = {
    lat:  40.63064779667318,
    lng:  -8.64842375528739
  };

  const pathCoordinates = [
    startLocation,
    destinationLocation
  ];

  const [redirect, setRedirect] = useState(false);

  const handleButtonClick = () => {
    // Set the state to true to trigger the redirection
    setRedirect(true);
  };

  if (redirect) {
    // Redirect to the desired route when the state is true
    return <Redirect to="/schedule" />;
  }


  return (
    <IonPage>

      <div slot="top" className='py-8 bg-blue '>
              <button className='bg-blue absolute left-0 top-3' onClick={handleButtonClick}  >
                <Icon name="br-angle-left" className='text-orange text-4xl'/>
              </button>
      </div>
      <IonCard  className='flex flex-nowrap py-4 bg-white m-0 rounded-none border-0 place-items-center p-15 relative' >
          <IonText className='text-center flex-1 text-black text-2xl'>Santiago Residential</IonText>
          <Icon name="br-route" className='text-center flex-1 text-orange text-4xl py-1/2  m-4'/>
          <IonText className=' text-center flex-1 text-black text-2xl'>Train Station</IonText>
      </IonCard>
  
    
      <LoadScript googleMapsApiKey="" >
          <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            options={mapOptions}
          >
         <Polyline path={pathCoordinates} options={{ geodesic: true, strokeColor: '#FF0000',  strokeOpacity: 1, strokeWeight: 10}} />
            
          </GoogleMap>
          
        </LoadScript>

      <IonModal  isOpen={isOpen}  className='bg-red fixed top-1/2 left-0   max-h-1/2  z-50 flex flex-nonwrap justify-items-center items-center'>
        <IonCard  className=' flex  items-center justify-center  py-4 bg-white m-0 rounded-none border-0 border-b-0 outline-0' >
            <Icon name="br-list" className='text-orange text-xl mr-2'/>
            <IonText className=' text-black text-2xl mb-1.5'>Available Schedules</IonText>
        </IonCard>
        <div className="overflow-y-auto px-4 ">
 
          {Array.from(Array(6).keys()).map((index) => (
          <IonCard key={index} className="rounded-lg bg-cyan-400 mb-4 p-0">
          <IonCardContent className="flex justify-between items-center p-0 pl-3 pr-0">
            {/* Left side (hours) */}
            <div className="flex flex-col items-start justify-between h-full">
              <div className="flex items-center text-white">
                <Icon name="br-calendar-days" className='text-black text-xl mr-2 '/>
                <IonText className='pb-1 text-xl' >17:00 AM</IonText>
              </div>
              <div className="flex items-center text-white">
                <Icon name="br-calendar-days" className='text-black text-xl mr-2'/>
                <IonText className='pb-1 text-xl'>17:45 PM</IonText>
              </div>
            </div>
            {/* Right side (info) */}
            <div className="flex flex-col justify-between w-1/2"> 
              <div className="rounded-lg flex items-center text-white mt-2 pl-2 m-0">
                <Icon name="br-bus" className='text-black text-xl ml-2 mr-7'/>
                <IonText className='text-xl pb-1 pt-1'>QW-4720</IonText> 
              </div>
              <IonButton className="bg-blue-800 text-white rounded-none flex items-center p-0 m-0">
                <div className="flex items-center w-full">
                  <Icon name="br-bus" className='text-black text-xl mr-2 mt-1'/>
                  <IonText className='text-l pb-1 pt-1'>Paragem Senh...</IonText> 
                </div>
              </IonButton>
            </div>
                        
          </IonCardContent>
        </IonCard>
          ))}
        </div>
      </IonModal>
  
    </IonPage>
  );
};

export default ScheduleList;
