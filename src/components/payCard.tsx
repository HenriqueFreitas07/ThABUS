import React, { JSXElementConstructor, useState } from 'react';
import { IonContent, IonPage, IonRippleEffect } from '@ionic/react';
import '../theme/main.css';
import Navbar from './Nav';
import payOptOne from '/icons/optone.svg';
import payOptTwo from '/icons/opttwo.svg';
import Carousel from './Carousel';
import CreditCard from './CreditCard';
import Input from './Input';
import Button from './Button';
import Icon from './Icon';
import { useHistory } from 'react-router-dom';
import { AlertSuccess } from './Alert';

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
  const [activeButton, setActiveButton] = useState<string | null>("button1");
  const [creditCard, setCreditCard] = useState<{ name: string, cardNumber: string, expiry: string, cvv: string }>({
    name: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
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
      AlertSuccess('PayPal Added Successfully! ');
    };

    return (
      <div className="paypal-form-container w-full">
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
    creditArray.push(CreditCard({ ...creditCard, className: "mx-auto my-4" }))
    creditCards.map((card, index) => (
      creditArray.push(CreditCard({
        name: card.name,
        cardNumber: card.number,
        cvv: card.cvv,
        expiry: card.expiryDate,
        className: "mx-auto my-4"
      })))
    );
  }
  const handleSubmit = () => {
    AlertSuccess('Credit Card Added Successfully! ');
    history.push('/payment')
  }

  initialCreditCard()




  return (
    <>
      <Navbar />
      <div className="flex mb-5 ml-5 pt-5">
        <div className="text-xl mx-auto p-3">
          Choose a Payment Method to Add
        </div>
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
          <form onSubmit={handleSubmit} >
            <div>

              {/* Credit Card Forms */}
              <Carousel items={creditArray} />
              <div className="w-full p-3">
                <label htmlFor='cardNumber'>Card Number:</label>
                <input placeholder='1234 5678 1234 5678' type='text' id='cardNumber' name='cardNumber' value={creditCard.cardNumber} onChange={(e) => setCreditCard((prevState) => ({ ...prevState, cardNumber: e.target.value }))} required />
                <label htmlFor='cardNumber'>Owner:</label>
                <input placeholder='José Afonso' type='text' id='name' name='name' value={creditCard.name} onChange={(e) => setCreditCard((prevState) => ({ ...prevState, name: e.target.value }))} required />
                <label htmlFor='expirationDate'>Expiration Date:</label>
                <input placeholder='MM/YY' type='text' id='expirationDate' name='expirationDate' value={creditCard.expiry} onChange={(e) => setCreditCard((prevState) => ({ ...prevState, expiry: e.target.value }))} required />
                <label htmlFor='cvv'>CVV:</label>
                <input placeholder='123' type='text' id='cvv' name='cvv' value={creditCard.cvv} onChange={(e) => setCreditCard((prevState) => ({ ...prevState, cvv: e.target.value }))} required />
              </div>
              <div className='text-center'>

                <button type="submit" className="w-4/5 mx-auto p-3 bg-blue text-white rounded-md shadow-md">Add payment</button>
              </div>

            </div>
          </form>
        )}
        {activeButton === 'button2' && <PayPalForm />}
      </div>
    </>

  );
};

export default CardsInfo;
