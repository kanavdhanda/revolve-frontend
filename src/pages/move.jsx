
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Move = () => {

  const handleLogout = () => {
    Cookies.remove('username');
    Cookies.remove('password');
    Cookies.remove('rememberMe');
    navigate('/login');
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#09090b]">

          <nav className="flex justify-between items-start w-full absolute top-0">
                    <ul>
                        <li className="my-2 ml-4"><Link to="/">Home</Link>{'>'}Chat</li>
                    </ul>
                    <ul className="inline-flex ">
                        <li className="m-2"> About </li>
                        <li className="m-2"><Link to="/sell">Want to Sell?</Link></li>
                        <li className="my-2 ml-2 mr-4 cursor-pointer" onClick={handleLogout}> Logout</li>  
                    </ul>
                </nav>
      <h1 className="mb-4 text-2xl text-slate-200">Welcome to our site</h1>
      <div className="flex gap-4">
        <Link to="/buy" className="px-4 py-2 bg-blue-500 text-white rounded">Buy</Link>
        <Link to="/sell" className="px-4 py-2 bg-green-500 text-white rounded">Sell</Link>
      </div>
    </div>
  );
};

export default Move;