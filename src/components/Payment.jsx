import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../redux/actions';

Modal.setAppElement('#root');

const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Contact: '',
    Item: '',
    Price: '',
    Adress: '',
    Payment: '',
  });

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePayment = (item) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      Item: item.name,
      Price: item.price.toString() 
    }));
    setIsModalOpen(true);
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCloseMessage = () => {
    setShowSuccessMessage(false);
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sheetDbUrl = 'https://sheetdb.io/api/v1/4pv6nvarna0gf';

      const response = await axios.post(sheetDbUrl, {
        data: formData
      });
      console.log('Response:', response.data);
      setShowSuccessMessage(true);
      setOrderPlaced(true);
    } catch (error) {
      console.error('Error storing data:', error);
      alert('There was an error booking the service. Please try again.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-4 rounded-lg shadow-md">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Price: ₹{item.price}</p>
            </div>
            <div className="flex space-x-2">
              {!orderPlaced ? (
                <>
                  <button
                    onClick={() => handlePayment(item)}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  >
                    Book service now!
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </>
              ) : (
                <span className="bg-gray-500 text-white py-2 px-4 rounded">
                  Order Placed
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate('/')}
        className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        Back to Home
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Booking Form"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="border p-2 rounded w-full mb-2"
              required
            />
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="border p-2 rounded w-full mb-2"
              required
            />
            <input
              type="number"
              name="Contact"
              value={formData.Contact}
              onChange={handleInputChange}
              placeholder="Enter your contact number"
              className="border p-2 rounded w-full mb-2"
              required
            />
            <input
              type="text"
              name="Adress"
              value={formData.Adress}
              onChange={handleInputChange}
              placeholder="Enter your address"
              className="border p-2 rounded w-full mb-2"
              required
            />
            <input
              type="text"
              name="Item"
              value={formData.Item}
              readOnly
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              name="Price"
              value={formData.Price}
              readOnly
              className="border p-2 rounded w-full mb-2"
            />
            <select
              name="Payment"
              value={formData.Payment}
              onChange={handleInputChange}
              className="border p-2 rounded w-full mb-2"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="Pay After Service">Pay After Service</option>
              <option value="Pay Now">Pay Now</option>
            </select>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full mt-4"
            >
              Place Order
            </button>
          </form>

          {showSuccessMessage && (
            <div className="mt-4">
              <p className="text-green-600 font-semibold">Thank You ... Successfully order placed</p>
              <button
                onClick={handleCloseMessage}
                className="mt-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Payment;
  
