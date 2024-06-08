
import logo from '../assets/logo.png';
import { useContext } from 'react';
import ResponseContext from '../context/ResponseContext';

function FResult(props){
    const { response } = useContext(ResponseContext);
 




    return(
<div className="bg-[#09090b] h-screen w-screen text-slate-200 flex flex-col justify-center items-center">
            <navbar className="flex justify-between items-start w-full absolute top-0">
                <ul>
                    <li className="my-2 ml-4 ">Home{'>'}Chat</li>
                </ul>
                <ul className="inline-flex ">
                    <li className="m-2"> About </li>
                    <li className="m-2"> Want to Sell?</li>
                    <li className="my-2 ml-2 mr-4"> Logout</li>  
                </ul>
        </navbar>
            <div className="flex flex-row">
                <h2 className="text-5xl mb-20 font-bold">Welcome to ReVolve</h2><img src={logo} className="h-14"></img>
            <p>{ans}</p>
        </div>
    </div>
    )
}

export default FResult;