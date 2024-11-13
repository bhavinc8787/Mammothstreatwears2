import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_usjd53g', 'template_9aey5ji', formData, '1QTyWl9bCO8phmxy1')
      .then((response) => {
        setMessage('Soon will contact you.');
        setFormData({ name: '', email: '', contactNumber: '' });
      })
      .catch((error) => {
        setMessage('Something went wrong, please try again.');
      });
  };

  const handleWhatsAppRedirect = () => {
    if (!formData.name || !formData.email || !formData.contactNumber) {
      setMessage('Please fill out all fields.');
      return;
    }

    const message = `Hello, I am ${formData.name}. I want to connect with you, so I am sharing my contact details:\nContact Number: ${formData.contactNumber}\nEmail: ${formData.email}`;
    const phoneNumber = '919075688958'; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
      <form onSubmit={handleEmailSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-600" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
            aria-required="true"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-600" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
            aria-required="true"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-600" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="text"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
            aria-required="true"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 flex items-center justify-center"
          >
            <img src="https://img.icons8.com/?size=50&id=53388&format=png&color=000000" alt="Email" className="mr-2" />
             Email
          </button>
          <button
            type="button"
            onClick={handleWhatsAppRedirect}
            className="flex-1 py-3 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex items-center justify-center"
          >
            <img src="https://img.icons8.com/?size=50&id=16712&format=png&color=000000" alt="WhatsApp" className="mr-2" />
             WhatsApp
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default ContactUs;
