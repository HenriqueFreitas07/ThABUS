import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonInput, IonItem } from '@ionic/react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from '../components/Icon';




const ScheduleP: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='bg-blue-950 bg-fixed'>
        <IonTitle><Icon name="br-angle-left" className='aspect-square inline-block mt-1 fill-orange-950 '></Icon></IonTitle>
      </IonHeader>

    </IonPage>
  );
};

export default ScheduleP;
