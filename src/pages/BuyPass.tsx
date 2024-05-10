import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import BuyingPass from '../components/BuyingPass';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <BuyingPass/>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
