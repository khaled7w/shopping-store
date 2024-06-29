import { fetchData } from '../../../Helpers/fetchData';
import { Link, useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      <div className="text-center mt-6">
        {cart.length > 0 && (
          <Link
            to="/cart"
            className=" text-red-700 underline hover:text-red-500 text-xl font-bold">
            Now You can go to cart 🛒
          </Link>
        )}
      </div>
      <div className="grid grid-cols-3 my-10 mx-7 gap-7">
        <MenuItem menu={menu} key={menu.menu.id} />
      </div>
    </div>
  );
}

export async function loader() {
  const menu = await fetchData();
  return { menu };
}

export default Menu;
