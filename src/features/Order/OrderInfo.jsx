import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import useParams hook
function getDate() {
  var today = new Date();
  var tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 2);
  return tomorrow.toLocaleDateString();
}

function OrderInfo() {
  const { id } = useParams();
  const order = useSelector((state) =>
    state.order.orders.filter((order) => order.id === id)
  );
  const totalPrice = order[0].cart.reduce((pre, cur) => pre + cur.price, 0);

  return (
    <div>
      <div className="text-center mt-5">
        <h3 className="text-xl">
          Order number:{' '}
          <span className="text-red-700 font-bold">{order[0].id}</span> , The
          Order will arrive in{' '}
          <span className="text-red-700 font-bold">{getDate()}</span>
        </h3>

        <div className="grid grid-cols-2 gap-2 w-96 mx-auto">
          <h1>
            Name:{' '}
            <span className="text-red-700 font-bold">{order[0].name}</span>
          </h1>
          <h1>
            Number:
            <span className="text-red-700 font-bold"> {order[0].number}</span>
          </h1>
        </div>

        <h1 className="text-xl text-center">
          Address:{' '}
          <span className="text-red-700 font-bold">{order[0].address}</span>
        </h1>
      </div>
      <div className="my-10  border-2 px-5 py-5 border-red-700 w-3/5 mx-auto relative">
        {order[0].cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <img src={item.image} className="w-8 h-8" />
              <p>{item.title}</p>
            </div>
            <p className="text-red-700 text-xl font-semibold">{item.price}$</p>
          </div>
        ))}
        <h2 className="text-center border-t-2 border-red-700 pt-2 text-2xl uppercase text-red-800">
          Total: {totalPrice}$
        </h2>
      </div>
    </div>
  );
}

export default OrderInfo;
