import { useState, useContext } from 'react';
import { IoMdSend } from 'react-icons/io';
import logo from '../assets/logo.png';
import './buy.css';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import ResponseContext from '../context/ResponseContext';

export default function Buy() {
    const [text, setText] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setResponse } = useContext(ResponseContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('rememberMe');
        navigate('/login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleClick();
    };

    const handleClick = async () => {
        setIsClicked(true);
        setLoading(true);
        if(text=='helo'){
            navigate('/result');
            setText('');
            setLoading(false);
            setIsClicked(false);
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/matching-products/', { "prompt": `"${text}"` }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setResponse(response.data);
            navigate('/result');
            setText('');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setIsClicked(false);
        }
    };

    return (
        loading ? (
            <div>
                <h1>Loading..</h1>
            </div>
        ) : (
            <div className="bg-[#09090b] h-screen w-screen text-slate-200 flex flex-col justify-center items-center">
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
                <div className="flex flex-row">
                    <h2 className="text-5xl mb-20 font-bold">Welcome to ReVolve</h2>
                    <img src={logo} className="h-14" alt="Logo"/>
                </div>  
                <form onSubmit={handleSubmit} className="w-4/12 flex items-center">
                    <input 
                        type="text" 
                        className="border-gray-800 border-2 bg-[#27272a] text-[#a3a3a3] text-sm w-full rounded-3xl h-9 px-4" 
                        placeholder="What would you like to buy today?" 
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                    <button type="submit">
                        <IoMdSend className={`ml-2 ${text ? 'text-slate-200' : 'text-gray-500'} ${isClicked ? 'animate-fly' : ''}`} size={24} />
                    </button>
                </form>
            </div>
        )
    );
}
