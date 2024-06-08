import { useContext } from 'react';
import ResponseContext from '../context/ResponseContext';
import Card from '../components/card';
import { useNavigate ,Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Result() {
    const { response } = useContext(ResponseContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('rememberMe');
        navigate('/login');
    };


    return (
        <div className="bg-[#09090b] h-screen w-screen text-slate-200 flex flex-col justify-center items-center">
            <nav className="flex justify-between items-start w-full absolute top-0">
            <ul>
                <li className="my-2 ml-4"><Link to="/">Home</Link>{'>'}<Link to="/buy">Chat</Link>{'>'}Results</li>
            </ul>
            <ul className="inline-flex ">
                <li className="m-2"> About </li>
                <li className="m-2"><Link to="/sell">Want to Sell?</Link></li>
                <li className="my-2 ml-2 mr-4 cursor-pointer" onClick={handleLogout}> Logout</li>  
            </ul>
        </nav>
            <h1 className="text-5xl mb-20 font-bold">Results</h1>
            {response ? (
                <div className="flex flex-wrap justify-center">
                    {response.map((item, index) => (
                        <Card
                            key={index}
                            company={item.seller_name}
                            condition={item.item_condition}
                            onClick={() => navigate('/fresult')}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <p>No results found.</p>
                </div>
            )}
        </div>
    );
}
