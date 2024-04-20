import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonInput, IonItem } from '@ionic/react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';




const ScheduleP: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        Schedule Page
      </IonContent>
      <div className='card'>
        <div  >
          <IonInput type="search" label="Origin: "  class="custom"></IonInput>
        </div>
        <div>
          <IonInput type="search" label="Destination: " class="custom"> </IonInput>
        </div>
        <div className='container'>
          <button className="buttonLeft">+ Filters</button>
          <button className="buttonRight">+</button>
        </div>
      </div>
      
    </IonPage>
  );
};

export default ScheduleP;
