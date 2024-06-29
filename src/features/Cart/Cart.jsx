import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearItems, deleteItem } from './cartSlice';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce((pre, cur) => pre + cur.price, 0);
  const dispatch = useDispatch();
  if (cart.length === 0) {
    return (
      <div className="mt-3 mx-4">
        <h1>The Cart is Empty , Go to Menu and add Items</h1>
        <Link
          to="/menu"
          className="text-red-700 underline hover:text-red-500 hover:text-xl">
          Go to Menu ➡
        </Link>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-center mt-6 text-red-700  text-xl font-bold">
        You have {cart.length} items in Cart{' '}
      </h1>
      <div className="my-10  border-2 px-5 py-5 border-red-700 w-3/5 mx-auto relative">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <img src={item.image} className="w-8 h-8" />
              <p>{item.title}</p>
            </div>
            <p className="text-red-700 text-xl font-semibold">{item.price}$</p>
            <button
              className="absolute -right-2.5 hover:text-xl"
              onClick={() => dispatch(deleteItem(item.id))}>
              ❌
            </button>
          </div>
        ))}
        <h2 className="text-center border-t-2 border-red-700 pt-2 text-2xl uppercase text-red-800">
          Total: {totalPrice}$
        </h2>
      </div>
      <div className="flex items-center gap-5 mx-auto w-72">
        <button
          className="bg-stone-500 text-stone-100 py-3 px-4 text-xl rounded-full hover:bg-stone-400 mt-2"
          onClick={() => dispatch(clearItems())}>
          Clear Items
        </button>
        <Link
          to="/order"
          className="bg-red-700 text-stone-100 py-3 px-4 text-xl rounded-full hover:bg-red-500 mt-2">
          Order Now
        </Link>
      </div>
    </>
  );
}

export default Cart;
