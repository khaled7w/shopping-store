import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOrder } from './orderSlice';
import { clearItems } from '../Cart/cartSlice';
import { useNavigate } from 'react-router-dom';

function generateRandomNumber() {
  return (Math.random() * 100000).toFixed(0);
}

function Order() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [address, setAddress] = useState();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (name.length < 5 || address.length < 5 || number.length < 4) {
      alert(
        'Invaled Data , Please give us a valid data to be able to send order to you'
      );
      console.log('here');
      return null;
    }
    const id = generateRandomNumber();
    dispatch(addOrder({ name, number, address, cart, id }));
    navigate(`/orderinfo/${id}`);
  }

  return (
    <form className="mx-5 my-5" onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          className="border rounded-full border-red-700 w-full px-3 py-1"
          required
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label>Number:</label>
        <input
          type="number"
          className="border rounded-full border-red-700 w-full px-3 py-1"
          required
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          className="border rounded-full border-red-700 w-full px-3 py-1"
          required
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <button
        className="bg-red-700  text-stone-100 py-3 px-4 rounded-full hover:bg-red-500 mt-2"
        required>
        Submit
      </button>
    </form>
  );
}

export default Order;
