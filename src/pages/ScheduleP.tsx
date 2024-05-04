import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonTabBar,IonTabButton, IonModal} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonInput, IonItem } from '@ionic/react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from '../components/Icon';
import React, { useState } from 'react';



const ScheduleP: React.FC = () => {
  const [isOpen] = useState(true);
  return (
    <IonPage>

      <IonTabBar slot="top" className='py-2 bg-blue'>
              <IonTabButton className='bg-blue absolute left-0 top-1'>
                <Icon name="br-angle-left" className='text-orange text-4xl'/>
              </IonTabButton>
      </IonTabBar>
      

      <IonModal  isOpen={isOpen}  className='bg-red fixed top-1/2 left-0   max-h-1/2  z-50'>
  
      </IonModal>
    </IonPage>
  );
};

export default ScheduleP;
