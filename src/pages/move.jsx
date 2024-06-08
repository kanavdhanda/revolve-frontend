
import { Link } from 'react-router-dom';

const Move = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#09090b]">
      <h1 className="mb-4 text-2xl text-slate-200">Welcome to our site</h1>
      <div className="flex gap-4">
        <Link to="/buy" className="px-4 py-2 bg-blue-500 text-white rounded">Buy</Link>
        <Link to="/sell" className="px-4 py-2 bg-green-500 text-white rounded">Sell</Link>
      </div>
    </div>
  );
};

export default Move;