import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import logo from '../assets/logo.png';
import './buy.css';
import axios from 'axios'; 


export default function Buy() {
    const [text, setText] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
       await handleClick();
    };

    const handleClick = () => {
        setIsClicked(true);
        setLoading(true);

        async function dataFetch(){
            try {
                const response = await axios.get('http://your-backend-server.com/api', {
                    params: {
                        text: text
                    }
                });
                console.log(response.data);
        setText('');

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        
        setTimeout(() => setIsClicked(false), 2000); // Reset after 2 seconds
       return dataFetch();
    };
    
    // async function dataFetch(){
    //     let response =await fetch('https://api.github.com/users')
    //     response = await response.json()
    // }

    return(
        loading?(<div>
            <h1>Loading..</h1>
        </div>):(
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
            </div>  
            <form onSubmit={handleSubmit} className="w-4/12 flex items-center">
                <input type="text " className=" border-gray-800 border-2 bg-[#27272a] text-[#a3a3a3] text-sm  w-full rounded-3xl h-9 px-4" placeholder="What would you like to buy today?" onChange={(e) => setText(e.target.value)}></input>
                <button type="submit"><IoMdSend className={`ml-2 ${text ? 'text-slate-200' : 'text-gray-500'} ${isClicked ? 'animate-fly' : ''}`} size={24} /></button>

                
            </form>
        </div>
        )
        
    
        

        
    )
}