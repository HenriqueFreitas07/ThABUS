import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import '../theme/main.css';
import Navbar from './Nav';
import payOptOne from '/icons/optone.svg';
import payOptTwo from '/icons/opttwo.svg';

interface CardsInfoProps {
  paymentoptions: string;
  optionone: string;
  optiontwo: string;
  selectcard: string;
  custombag: string;
  custombagnumber: string;
  delivery: string;
  deliverynumber: string;
  total: string;
  totalnumber: string;
  pay: string;
}

const CardsInfo: React.FC<CardsInfoProps> = ({ 
  paymentoptions,
  optionone,
  optiontwo,
  selectcard,
  custombag,
  custombagnumber,
  delivery,
  deliverynumber,
  total,
  totalnumber,
  pay
}) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  const PayPalForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Aqui você pode adicionar a lógica para processar o pagamento com PayPal
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <div className="paypal-form-container">
        <h2 className="paypal-form-title pb-5">Pay with Paypal</h2>
        <form onSubmit={handleSubmit}>
          <div className="paypal-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="paypal-form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="paypal-form-button">Add payment</button>
        </form>
      </div>
    );
  };

  return (
    <IonPage>
      <IonContent>
        <div className='profile-content'>
          <Navbar />
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: '20px' }}></div>
          <div className="flex mb-5 ml-5 pt-5">
            <div className="font-medium">{paymentoptions}</div>
          </div>
          <div className="button-container" style={{ display: 'flex' }}>
          <button
              className={`ml-5 custom-button ${activeButton === 'button1' ? 'active' : ''}`}
              onClick={() => handleButtonClick('button1')}
              style={{
                flex: 1,
                marginRight: '5px',
                backgroundColor: activeButton === 'button1' ? '#f0f0f0' : 'white',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            >
              <img src={payOptOne} alt="Option One" style={{ width: '30px',  margin: 'auto' }} className='pt-3 pb-3'/>
            </button>
            <button
              className={`mr-5 custom-button ${activeButton === 'button2' ? 'active' : ''}`}
              onClick={() => handleButtonClick('button2')}
              style={{
                flex: 1,
                marginLeft: '5px',
                backgroundColor: activeButton === 'button2' ? '#f0f0f0' : 'white',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            >
              <img src={payOptTwo} alt="Option Two" style={{ width: '50px', margin: 'auto' }} />
            </button>
          </div>
          <div className="info flex mb-2 ml-5 pt-5" style={{ width: '100%', flexDirection: 'column' }}>
            {activeButton === 'button1' && (
              <div style={{ width: '100%' }}>
                {selectcard}
                <p className='p-10'>Carousel</p>
                <div className="flex mr-10 azulinho " style={{ justifyContent: 'space-between' }}>
                  <p className='mt-3'>{custombag}</p>
                  <p className='mt-3'>{custombagnumber}</p>
                </div>
                <div className="flex mr-10 azulinho" style={{ justifyContent: 'space-between' }}>
                  <p className='mt-3'>{delivery}</p>
                  <p className='mt-3'>{deliverynumber}</p>
                </div>
                <div className="flex mr-10 azulinho" style={{ justifyContent: 'space-between' }}>
                  <p className='mt-3'>{total}</p>
                  <p className='mt-3'>{totalnumber}</p>
                </div>
              </div>
            )}
            {activeButton === 'button2' && <PayPalForm />}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CardsInfo;
