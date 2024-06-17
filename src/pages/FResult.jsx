import { useContext } from 'react';
import ResponseContext from '../context/ResponseContext';
import { useNavigate , Link} from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Fresult() {
    const { response } = useContext(ResponseContext);
    const navigate = useNavigate();
        
    const handleLogout = () => {
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('rememberMe');
        navigate('/login');
    };

    const handleClick = () => { navigate('/') }

    if (!response) {
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
                <h1 className="text-5xl mb-20 font-bold">Result</h1>
                <p>No results found. Please go back and try again.</p>
                <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">
                    Go Back
                </button>
            </div>
        );
    }

    if (response.error) {
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
                <h1 className="text-5xl mb-20 font-bold">Error</h1>
                <p className="text-xl">{response.error}</p>
                <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">
                    Go Back
                </button>
            </div>
        );
    }

    const defects = Object.keys(response).filter(key => key !== 'Number of defects' && key !== 'company');

    return (
        <div className="bg-[#09090b] min-h-screen w-screen text-slate-200 flex flex-col pt-12">

            {/* <h1 className="text-5xl mb-10 font-bold">{response.company}</h1> */}
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
            <div className="ml-4">
            <h1 className="text-5xl  font-bold text-left gap-1">{response.company}</h1>
            <p className="text-xl mb-10">{`Number of defects: ${response['Number of defects']}, weight: 1 tonne`}</p>
            <br className="border-1 border-gray-200"></br>
            <div className="text-lg mb-6 justify-center items-center" >
                {defects.map((defectKey, defectIndex) => {
                    const defect = response[defectKey];
                    const processes = Object.keys(defect).filter(key => !['Defect', 'Number of Processes', 'Suggested'].includes(key));
                    return (
                        <div key={defectIndex} className="mb-6">
                            <p className="text-2xl mb-4 font-semibold">{`Defect: ${defect.Defect}`}</p>
                            {processes.map((processKey, processIndex) => {
                                const process = defect[processKey];
                                return (
                                    <div key={processIndex} className="mt-4">
                                        <p className="font-semibold">{`${processIndex + 1}. ${process['Process Name']}`}</p>
                                        <p>{process['Description']}</p>
                                        <p>{`Price: ${process['Price']}`}</p>
                                    </div>
                                );
                            })}
                            <div className="mt-4">
                                <p className="font-semibold">Suggested Process: {defect.Suggested['Process']}</p>
                                <p>Carbon Emission Scale: {defect.Suggested['Carbon']}</p>
                            </div>

                            <button className="justify-center" onClick={handleClick}>Contact Details</button>
                        </div>

                    );
                })}
                </div>
            </div>
        </div>
    );
}
