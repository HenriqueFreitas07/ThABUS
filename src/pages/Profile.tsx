import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ProfileInfo from '../components/profileInfo';
import perfilImage from '/icons/profilephoto.svg';
import editing from '/icons/edit.svg';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ProfileInfo
          profilePic={perfilImage}
          userName="Francisco Quintão"
          subtitle="This is your Personal Area"
          detailsText="Personal Details"
          emailAddress="francisco.quintao@gmail.com"
          phoneNumber="914 513 008"
          busPass="Buy Pass"
          profileSettings="Settings"
          paymentMethod="Add Payment Method"
          notifications="Notifications"
          edit={editing}
        />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
