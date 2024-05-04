import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonInput, IonItem } from '@ionic/react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from '../components/Icon';




const ScheduleList: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='card'>
          <div  >
            <IonInput type="search" label="Origin: " class="custom"></IonInput>
          </div>
          <div>
            <IonInput type="search" label="Destination: " class="custom"> </IonInput>
          </div>
          <div className='container flex justify-between'>
          <div className='flex buttonLeft '>
            <button className=" flex flex-row content-center"><Icon name="br-square-plus" className='inline-block mr-2 mt-0.5'></Icon>Filters</button>
          </div>  
            <button className="buttonRight self-center" ><Icon name="br-search-location" className='aspect-square inline-block mt-1'></Icon></button>
          </div>
        </div>
      </IonContent>


    </IonPage>
  );
};

export default ScheduleList;
