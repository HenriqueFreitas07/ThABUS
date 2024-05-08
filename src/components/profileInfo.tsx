import React from 'react';
import '../theme/main.css';
import { useHistory } from 'react-router-dom';
import Navbar from './Nav';

interface ProfileInfoProps {
  profilePic: string,
  userName: string;
  subtitle: string;
  detailsText: string;
  emailAddress: string;
  phoneNumber: string;
  busPass: string;
  profileSettings: string;
  paymentMethod: string;
  notifications: string;
  edit: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  profilePic,
  userName,
  subtitle,
  detailsText,
  emailAddress,
  phoneNumber,
  busPass,
  profileSettings,
  paymentMethod,
  notifications,
  edit
}) => {
  const history = useHistory();

  const BuyingPass = () => {
    history.push("/BuyPass");
  };

  const PaymentCards = () => {
    history.push("/PaymentCards");
  };

  return (
    <div className='profile-content'>
      <Navbar />
      <div className="profile-image mt-5 block mx-auto">
        <img src={profilePic} alt="foto de perfil" />
      </div>
      <div className="profile-name">
        {userName}
      </div>
      <div className="profile-subtitle mt-3">
        {subtitle}
      </div>

      <div className="flex mb-2 ml-5 pt-5">
        <img src='/icons/iconpersonal.svg' alt="icon" className="w-6 h-6 mr-2" />
        <div className="font-medium">{detailsText}
        </div>
        <img src={edit} alt="" className='w-7 h-7 mr-2' style={{ marginLeft: 'auto' }} />
      </div>
      <hr style={{ opacity: 0.2 }} />

      <div className="flex text-custom-blue pt-8 pb-8 pl-12 pr-0">
        <img src="/icons/mail.svg" alt="email" className="w-6 h-6 mr-2 pr-0" />
        <div>{emailAddress}
        </div>
      </div>
      <hr style={{ opacity: 0.2 }} />
      <div className="flex text-custom-blue pt-8 pb-8 pl-12 pr-0">
        <img src='/icons/phone.svg' alt="email" className="w-6 h-6 mr-2 pr-0" />
        <div>{phoneNumber}
        </div>
      </div>
      <hr style={{ opacity: 0.2 }} />
      <div className="flex items-center justify-start text-custom-yellow pt-8 pb-8 pl-12 pr-0">
        <img src='/icons/buspass.svg' alt="email" className="w-6 h-6 mr-2 pr-0" />
        <div className='text-custom-yellow cursor-pointer' onClick={BuyingPass}>
          {busPass}
        </div>
      </div>
      <hr style={{ opacity: 0.2 }} />
      <div className="flex mb-2 mt-5 ml-5 pt-10 pr-0">
        <img src='/icons/settings.svg' alt="icon" className="w-6 h-6 mr-2 pr-0" />
        <div className="font-medium">{profileSettings}
        </div>
      </div>
      <hr style={{ opacity: 0.2 }} />
      <div className="flex items-center justify-start text-custom-yellow pt-8 pb-8 pl-12 pr-0">
        <img src='/icons/paymentmethod.svg' alt="email" className="w-6 h-6 mr-2 pr-0" />
        <div className='text-custom-yellow cursor-pointer' onClick={PaymentCards}>
          {paymentMethod}
        </div>
      </div>
      <hr style={{ opacity: 0.2 }} />
      <div className="flex items-center justify-start text-custom-blue pt-8 pb-8 pl-12 pr-0">
        <img src='/icons/notification.svg' alt="email" className="w-6 h-6 mr-2 pr-0" />
        <div>{notifications}
        </div>
      </div>
      <hr style={{ opacity: 0.2 }} />
      <div className="flex items-center justify-start text-custom-blue pt-8 pb-8 pl-12 pr-0">
        <img src='/icons/pass.svg' alt="email" className="w-6 h-6 mr-2 pr-0" />
        <div>Change Password
        </div>
      </div>
      <hr style={{ opacity: 0.2 }} />
      <div style={{ height: `10px` }}></div>
    </div>
  );
};

export default ProfileInfo;