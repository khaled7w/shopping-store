import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-lvh">
      <h1 className="text-2xl mb-4">
        Welcome to Our Store👋, We wish you good time🙏
      </h1>
      <Link
        to="/menu"
        className="text-red-700 font-bold text-xl hover:text-red-500 hover:underline">
        Go To Menu ➡
      </Link>
    </div>
  );
}

export default Home;
