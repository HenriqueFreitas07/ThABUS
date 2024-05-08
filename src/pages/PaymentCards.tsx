import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import CardsInfo from '../components/payCard'; 
import payOptOne from '/icons/optone.svg';
import payOptTwo from '/icons/opttwo.svg';

const Payment: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <CardsInfo 
          paymentoptions="Payment Options"
          optionone={payOptOne}
          optiontwo={payOptTwo}
          selectcard="Select Card"
          custombag="Custom Bag"
          custombagnumber="€50"
          delivery="Delivery Charge"
          deliverynumber="€5"
          total="Total Amount"
          totalnumber="€55"
          pay="Add Cart"
        />
      </IonContent>
    </IonPage>
  );
};

export default Payment;
