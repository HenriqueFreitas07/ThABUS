import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import React from 'react';
import Alert from '../components/Alert';
import Input from '../components/Input';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* content */}

        <Alert 
        text={'Ola'}
        buttonText={"click me"} 
        header={'Este é um alert'} 
        subheader={'este é um sub header'} 
        alertChoice={["ok", "não ok"]} 
        buttonClass='bg-orange hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        />
        <Input 
        type='text'
        label='Nome'
        labelPlacement='floating'
        placeholder='Digite seu nome'

        />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
