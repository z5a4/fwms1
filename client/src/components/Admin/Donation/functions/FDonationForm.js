import { useState } from 'react';
import Axios from 'axios';

const FDonationForm = () => {
  const [donationId, setdonationId] = useState('');
  const [formData, setFormData] = useState({
    donationType: '',
    description: '',
    donationDate: '',
    donorName: '',
    donorMobileNo: '',
    donorEmail: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    donationAmount: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the current field when it's updated
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Example validation rules, adjust as needed
    if (!formData.donationType) {
      newErrors.donationType = 'Donation Type is required';
      isValid = false;
    }

    
    if (!formData.donationAmount || isNaN(formData.donationAmount) || formData.donationAmount <= 0) {
      newErrors.donationAmount = 'Valid donation amount is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Send the form data to the server
        const response = await Axios.post('http://localhost:5000/api/donations', formData);

        // Display a success message
        alert(response.data.message);
        setdonationId(response.data.donationId);
        setFormData({
          donationType: '',
    description: '',
    donationDate: '',
    donorName: '',
    donorMobileNo: '',
    donorEmail: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    donationAmount: '',
              });
      
      } catch (error) {
        console.error('Error submitting donation form:', error);
        // Display an error message
        alert('Donation submission failed. Please try again.');
      }
    } else {
      alert('Form validation failed. Please check the fields.');
    }
  };

  return { formData, errors, handleInputChange, handleSubmit,donationId };
};

export default FDonationForm;
