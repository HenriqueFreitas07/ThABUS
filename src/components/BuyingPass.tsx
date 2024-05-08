import React, { useState, useEffect } from 'react';
import '../theme/main.css'; 
import Navbar from './Nav';

interface BuyingPassProps {}

const BuyingPass: React.FC<BuyingPassProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    selectedZones: [] as string[], // Definindo selectedZones como uma array de strings
    price: 0,
    showModal: false,
  });

  const [secondsLeft] = useState(3);

  const zonePrice = 3.99;

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

  const handleChange = (zone: string) => {
    const selectedZones = [...formData.selectedZones];
    const zoneIndex = selectedZones.indexOf(zone);

    if (zoneIndex === -1) {
      selectedZones.push(zone);
    } else {
      selectedZones.splice(zoneIndex, 1);
    }

    const price = 20;

    setFormData((prevState) => ({
      ...prevState,
      selectedZones,
      price,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showModal();
  };

  const showModal = () => {
    setFormData((prevState) => ({
      ...prevState,
      showModal: true,
    }));
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
      selectedZones: [],
      price: 0,
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
          <input placeholder='Tha Bus'type='text' id='name' name='name' value={formData.name} onChange={(e) => setFormData((prevState) => ({ ...prevState, name: e.target.value }))} required />
          <label htmlFor='email'>Email:</label>
          <input placeholder='tha@bus.com'type='email' id='email' name='email' value={formData.email} onChange={(e) => setFormData((prevState) => ({ ...prevState, email: e.target.value }))} required />
          <label htmlFor='cardNumber'>Card Number:</label>
          <input type='text' placeholder='1234 5678 910 111 2' id='cardNumber' name='cardNumber' value={formData.cardNumber} onChange={(e) => setFormData((prevState) => ({ ...prevState, cardNumber: e.target.value }))} required />
          <label htmlFor='expirationDate'>Expiration Date:</label>
          <input type='text' id='expirationDate' name='expirationDate' placeholder='MM/YY' value={formData.expirationDate} onChange={(e) => setFormData((prevState) => ({ ...prevState, expirationDate: e.target.value }))} required />
          <label htmlFor='cvv'>CVV:</label>
          <input type='text' id='cvv' name='cvv' placeholder='123' value={formData.cvv} onChange={(e) => setFormData((prevState) => ({ ...prevState, cvv: e.target.value }))} required />

          <label>Zones:</label>
          <div className='zone-buttons'>
            <button className={formData.selectedZones.includes('Barra') ? 'zone-button selected' : 'zone-button'} onClick={() => handleChange('Barra')}>Barra</button>
            <button className={formData.selectedZones.includes('Industrial') ? 'zone-button selected' : 'zone-button'} onClick={() => handleChange('Industrial')}>Industrial</button>
            <button className={formData.selectedZones.includes('Litoral') ? 'zone-button selected' : 'zone-button'} onClick={() => handleChange('Litoral')}>Litoral</button>
            <button className={formData.selectedZones.includes('Universidade') ? 'zone-button selected' : 'zone-button'} onClick={() => handleChange('Universidade')}>Universidade</button>
            <button className={formData.selectedZones.includes('Centro') ? 'zone-button selected' : 'zone-button'} onClick={() => handleChange('Centro')}>Centro</button>
          </div>

          <p className='price-info'>Price: {formData.price.toFixed(2)}€</p>

          <input type='submit' value='Pay' className='submit-button' />
        </form>
      </div>
      {formData.showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <p>Your payment has been successfully submitted!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyingPass;