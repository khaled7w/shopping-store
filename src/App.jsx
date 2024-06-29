import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './features/Home/Home';
import Cart from './features/Cart/Cart';
import Order from './features/Order/Order';
import Menu, { loader } from './features/Menu/Menu';
import './index.css';
import OrderInfo from './features/Order/OrderInfo';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/cart', element: <Cart /> },
    { path: '/menu', element: <Menu />, loader: loader },
    { path: '/order', element: <Order /> },
    { path: '/orderinfo/:id', element: <OrderInfo /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
