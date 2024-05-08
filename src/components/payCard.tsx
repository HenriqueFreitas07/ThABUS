import React, { JSXElementConstructor, useState } from 'react';
import { IonContent, IonPage, IonRippleEffect } from '@ionic/react';
import '../theme/main.css';
import Navbar from './Nav';
import payOptOne from '/icons/optone.svg';
import payOptTwo from '/icons/opttwo.svg';
import Carousel from './Carousel';
import CreditCard from './CreditCard';
import Alert from './Alert';
import Input from './Input';
import Button from './Button';
import Icon from './Icon';
import { useHistory } from 'react-router-dom';

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

const creditCards = [
  {
    name: "John Doe",
    number: "1234 5678 9012 3456",
    cvv: "123",
    expiryDate: "12/23"
  },
  {
    name: "Jane Smith",
    number: "4567 8901 2345 6789",
    cvv: "456",
    expiryDate: "10/25"
  },
  {
    name: "Alice Johnson",
    number: "7890 1234 5678 9012",
    cvv: "789",
    expiryDate: "08/24"
  }
];

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
  const [creditCard, setCreditCard] = useState<{ name: string, cardNumber: string, expiry: string, cvv: string }>({
    name: "",
    cardNumber: "",
    cvv: "",
    expiry: ""
  });

  let history = useHistory();
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

  let creditArray: any = [];

  const initialCreditCard = () => {
    creditArray.push(CreditCard(creditCard))
    creditCards.map((card, index) => (
      creditArray.push(CreditCard({
        name: card.name,
        cardNumber: card.number,
        cvv: card.cvv,
        expiry: card.expiryDate
      })))
    );
  }

  initialCreditCard()




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
              <img src={payOptOne} alt="Option One" style={{ width: '30px', margin: 'auto' }} className='pt-3 pb-3' />
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
          <div className="info flex mb-2 pt-5" style={{ width: '100%', flexDirection: 'column' }}>
            {activeButton === 'button1' && (
              <div className="" >
                {/* Credit Card Forms */}
                <Carousel items={creditArray} />
                <div className="w-full p-3">
                  <div className=" w-full flex">

                    <div className="w-3/4 ml-2">
                      <Input
                        type="text"
                        fill="outline"
                        placeholder="**** **** **** ****"
                        label="Card Number"
                        labelPlacement="floating"
                        className=""
                        color="warning"
                        callback={(e) => { setCreditCard({ ...creditCard, cardNumber: e.target.value }) }}
                      >
                      </Input>
                    </div>
                    <div className="w-1/3 ml-2">
                      <Input
                        color="warning"
                        type="text"
                        fill="outline"
                        placeholder="***"
                        label="CVV"
                        labelPlacement="floating"
                        className=""
                        callback={(e) => { setCreditCard({ ...creditCard, cvv: e.target.value }) }}
                      >
                      </Input>
                    </div>
                  </div>
                  <div className="w-full flex">
                    <div className="w-3/5 ml-2">
                      <Input
                        type="text"
                        fill="outline"
                        placeholder="Jervásio da Silva"
                        label="Card Holder"
                        labelPlacement="floating"
                        className=""
                        color="warning"
                        callback={(e) => { setCreditCard({ ...creditCard, name: e.target.value }) }}
                      >
                      </Input>
                    </div>
                    <div className="w-2/5 ml-2 ">
                      <Input
                        color="warning"
                        type="text"
                        fill="outline"
                        placeholder="MM/YY"
                        label="Expires At"
                        labelPlacement="floating"
                        className=""
                        callback={(e) => { setCreditCard({ ...creditCard, expiry: e.target.value }) }}
                      >
                      </Input>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className={`ripple-parent rounded-rectangle bg-blue text-center text-white`}
                    onClick={() => { alert('Payment Successful'); history.push('/payment') }}
                  >
                    <b>
                      Adicionar
                    </b>
                    <IonRippleEffect></IonRippleEffect>
                  </div>
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
