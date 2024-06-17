import { useContext, useState} from 'react';
import ResponseContext from '../context/ResponseContext';
import run from '../api/run';

import { useNavigate ,Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Card from '../components/card'
export default function Result() {
    const { response } = useContext(ResponseContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const { setResponse } = useContext(ResponseContext);

    const handleLogout = () => {
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('rememberMe');
        navigate('/login');
    };

    const handleClick = async (condition,company) =>{
        console.log("clicked");
        setLoading(true)
        // const contact = await axios.post('http://127.0.0.1:8000/contact/', { item_id }, { headers});
        const response1 = await run(condition);
        if (response1) {
            response1.company = company;  // Add the company name to the response
            setResponse(response);
                setLoading(false)
            navigate('/fresult');
        } else {
            console.error("No response received or failed to parse JSON");
            setLoading(false);
            alert("Error Has occured");
        }
    }


    return (
        loading ? (<div className="flex text-5xl min-h-screen w-screen bg-[#09090b] justify-center align-center"><h1>Loading..</h1></div>) :(
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
            {response.length === 0 ? (
                <div className="flex flex-col items-center">
                <p>No results found.</p>
                <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">
                    Go Back
                </button>
            </div>
                
            ) : (
                
                <div className="flex flex-wrap justify-center">
                {response.map((item, index) => (
                    <Card
                        key={index}
                        id = {item.id}
                        company={item.seller_name}
                        condition={item.item_condition}
                        onClick={()=>handleClick(item.item_condition,item.seller_name)}
                    />
                ))}
            </div>
            )}
        </div>
        )

    
        
    );
}
