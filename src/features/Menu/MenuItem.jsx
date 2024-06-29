import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../Cart/cartSlice';

function MenuItem({ menu }) {
  const [open, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const cartIds = useSelector((state) => state.cart.cart).map(
    (item) => item.id
  );

  if (!menu || !menu.menu) {
    return null;
  }

  function handleOpen(itemId) {
    if (id === itemId) {
      setIsOpen(false);
      setId(null);
      return;
    }
    setId(itemId);
    setIsOpen((open) => !open);
  }

  return menu.menu.map((item) => (
    <div
      key={item.id}
      className="flex flex-col items-center border-2 px-2 py-2 justify-between ">
      <div>
        <img src={item.image} alt={item.title} className="w-40 h-40" />
      </div>
      <h1 className="text-red-700 text-xl">{item.title}</h1>
      <button
        className="bg-red-700 text-stone-100 py-3 px-4 text-xs rounded-full hover:bg-red-500 mt-2"
        onClick={() => handleOpen(item.id)}>
        {open ? 'Hide Description' : 'Show Description'}
      </button>
      {open && id === item.id && <p>{item.description}</p>}

      <div className="w-full flex items-center justify-between mt-3">
        <p>Price:{item.price}$</p>

        {cartIds.includes(item.id) ? (
          <button
            className="py-2 px-3 bg-red-700 text-xs text-stone-200 rounded-full hover:bg-red-500"
            onClick={() => {
              dispatch(deleteItem(item.id));
            }}>
            Delete Item
          </button>
        ) : (
          <button
            className="py-2 px-3 bg-red-700 text-xs  text-stone-200 rounded-full hover:bg-red-500"
            onClick={() => {
              dispatch(addItem(item));
            }}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  ));
}

export default MenuItem;
