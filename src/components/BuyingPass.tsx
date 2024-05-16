import React, { useState, useEffect } from 'react';
import '../theme/main.css';
import Navbar from './Nav';
import { IonSelect, IonSelectOption } from '@ionic/react';
import { AlertError, AlertSuccess } from './Alert';
import { useHistory } from 'react-router';
import Payment from './../pages/PaymentCards';

interface BuyingPassProps { }

const BuyingPass: React.FC<BuyingPassProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    selectedZones: '', // Definindo selectedZones como uma array de strings
    price: 0,
    paymentMethod: '',
    paypalEmail: '',
    phone:'',
    showModal: false,
  });

  const [secondsLeft] = useState(3);

  const zonePrice = 2.2;

  const history = useHistory();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (formData.showModal) {
      timer = setTimeout(() => {
        hideModal();
        clearForm();
      }, secondsLeft * 1000);
    }
    return () => clearTimeout(timer);
  }, [formData.showModal, secondsLeft]);

  const handleChangeZone = (zone: string) => {
    const price = 20 + zonePrice * (zone.length);
    const selectedZones = zone;
    setFormData((prevState) => ({
      ...prevState,
      selectedZones,
      price,
    }));
  };
  const handleChangeMethod = (id: string) => {
    setFormData((prevState) => ({
      ...prevState,
      paymentMethod: id,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.paymentMethod === '' || formData.selectedZones === ''){
      AlertError('Please fill all the fields');
      return
    }
    showModal()
  };

  const showModal = () => {
    clearForm();
    AlertSuccess('Your payment has been successfully submitted!',"Yay!",()=>{history.push('/payment')});
  };

  const hideModal = () => {
    setFormData((prevState) => ({
      ...prevState,
      showModal: false,
    }));
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      selectedZones: '',
      price: 0,
      paymentMethod: '',
      paypalEmail: '',
      phone:'',
      showModal: false,
    });
  };

  return (
    <div className='perfil-content'>
      <Navbar />
      <div className='buying-pass-content p-5'>
        <h1>Buy Bus Pass</h1>
        <p>With our monthly bus pass, you can travel as many times as you want within a one-month period.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input placeholder='Tha Bus' type='text' id='name' name='name' value={formData.name} onChange={(e) => setFormData((prevState) => ({ ...prevState, name: e.target.value }))} required />
          <label htmlFor='email'>Email:</label>
          <input placeholder='tha@bus.com' type='email' id='email' name='email' value={formData.email} onChange={(e) => setFormData((prevState) => ({ ...prevState, email: e.target.value }))} required />

          <label className="pt-2" >Payment Method:</label>
          <IonSelect className="pt-2" fill="outline" color="warning" placeholder="Select a payment method..."
            onIonChange={(e) => handleChangeMethod(e.detail.value)}
          >
            <IonSelectOption value="1">Credit Card</IonSelectOption>
            <IonSelectOption value="2">Paypal</IonSelectOption>
            <IonSelectOption value="3">MBWay</IonSelectOption>
          </IonSelect>
          <div className={`${formData.paymentMethod ==='' ? 'hidden' : ''} my-2 rounded-md w-full p-3 border-2 border-orange`}>
            {formData.paymentMethod === '1' && (
              <>
                <label htmlFor='cardNumber'>Card Number:</label>
                <input placeholder='1234 5678 1234 5678' type='text' id='cardNumber' name='cardNumber' value={formData.cardNumber} onChange={(e) => setFormData((prevState) => ({ ...prevState, cardNumber: e.target.value }))} required />
                <label htmlFor='expirationDate'>Expiration Date:</label>
                <input placeholder='MM/YY' type='text' id='expirationDate' name='expirationDate' value={formData.expirationDate} onChange={(e) => setFormData((prevState) => ({ ...prevState, expirationDate: e.target.value }))} required />
                <label htmlFor='cvv'>CVV:</label>
                <input placeholder='123' type='text' id='cvv' name='cvv' value={formData.cvv} onChange={(e) => setFormData((prevState) => ({ ...prevState, cvv: e.target.value }))} required />
              </>
            )}
            {formData.paymentMethod === '2' && (
              <>
                <label htmlFor='email'>Paypal email:</label>
                <input placeholder='tha@bus.com' type='email' id='email' name='email' value={formData.paypalEmail} onChange={(e) => setFormData((prevState) => ({ ...prevState, paypalEmail: e.target.value }))} required />
              </>
            )}
            {formData.paymentMethod === '3' && (
              <>
                <label htmlFor='phone'>Phone:</label>
                <input placeholder='912345678' className="p-2" type="number" maxLength={9} id='phone' name='phone' value={formData.phone} onChange={(e) => setFormData((prevState) => ({ ...prevState, phone: e.target.value }))} required />
              </>
            )}
          </div>

          <label className="pt-2" >Zones:</label>
          <IonSelect fill="outline" className="pt-2" color="warning" placeholder="Select the zone of the pass... "
            onIonChange={(e) => handleChangeZone(e.detail.value)}
          >
            <IonSelectOption value="Barra">Barra</IonSelectOption>
            <IonSelectOption value="Industrial">Industrial</IonSelectOption>
            <IonSelectOption value="Litoral">Litoral</IonSelectOption>
            <IonSelectOption value="Universidade">Universidade</IonSelectOption>
            <IonSelectOption value="Centro">Centro</IonSelectOption>
          </IonSelect>
          <p className='price-info'>Price: {formData.price.toFixed(2)}€</p>

          <input type='submit' value='Pay' className='submit-button' />
        </form>
      </div>
    </div>
  );
};

export default BuyingPass;