import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import logo from '../assets/logo.png';
import './buy.css';
// import axios from 'axios'; 


export default function Buy() {
    const [text, setText] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 2000); // Reset after 2 seconds
    };
    
    // async function dataFetch(){
    //     let response =await fetch('https://api.github.com/users')
    //     response = await response.json()
    // }

    return(
        <div className="bg-[#09090b] h-screen w-screen text-slate-200 flex flex-col justify-center items-center">
            <navbar className="flex justify-between items-start w-full absolute top-0">
                <ul>
                    <li className="m-2">Home{'>'}Select{'>'}Chat</li>
                </ul>
                <ul className="inline-flex ">
                    <li className="m-2"> About </li>
                    <li className="m-2"> would you like to Sell?</li>
                    <li className="m-2"> logout</li>  
                </ul>
        </navbar>
            <div className="   flex flex-row">
                <h2 className="text-5xl mb-20 font-bold">Welcome to ReVolve</h2><img src={logo} className="h-14"></img>
            </div>  
            <form className="w-4/12 flex items-center">
                <input type="text " className=" border-gray-800 border-2 bg-[#27272a] text-[#a3a3a3] text-sm  w-full rounded-3xl h-9 px-4" placeholder="What would you like to buy today?" onChange={(e) => setText(e.target.value)}></input>
                <IoMdSend className={`ml-2 ${text ? 'text-slate-200' : 'text-gray-500'} ${isClicked ? 'animate-fly' : ''}`} size={24} onClick={handleClick} />
            </form>
        </div>
    )
}