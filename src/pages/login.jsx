// import { useState } from 'react';
// import Cookies from 'js-cookie';

// export default function Login(){
//     const [rememberMe, setRememberMe] = useState(false);

//     const handleCheckboxChange = (event) => {
//         setRememberMe(event.target.checked);
//         if (event.target.checked) {
//             Cookies.set('rememberMe', 'true', { expires: 7 }); // Cookie will expire after 7 days
//         } else {
//             Cookies.remove('rememberMe');
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("submit");
//         if (Cookies.get('rememberMe')) {
//             // Handle login with remember me functionality
//             const username = this.state.username; // replace with actual username
//             const password = this.state.password; // replace with actual password
//             Cookies.set('username', username, { expires: 7 });
//             Cookies.set('password', password, { expires: 7 });
//         } else {
//             // Handle login without remember me functionality
//             const username = this.state.username; // replace with actual username
//             const password = this.state.password; // replace with actual password
//         }
//     };
//     return(
//         <div className="loginPage bg-[#09090b] h-screen w-screen flex justify-center items-center flex-row">
//             <div className=" text-slate-200">
//                 <h2 className="text-5xl mb-10 ">Welcome</h2>
//                 <form className="flex flex-col gap-3">
//                     <div className="flex justify-between">
//                     <label className="text-slate-200 text-2xl" htmlFor="username">Username</label>
//                     <input type="text" 
//                     placeholder="Username" 
//                     id="username" 
//                     className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 ml-4 w-44 px-2"></input>
//                     </div>
//                     <div className="flex justify-between">
//                         <label className="text-slate-200 text-2xl"htmlFor="username">Password</label>
//                         <input type="password" placeholder="Password" className="rounded-lg h-10 w-44 ml-4 px-2 bg-[#27272a] text-[#a3a3a3] border-gray-800 border-2"></input>
//                     </div>
//                     <div className="flex justify-between">
//                         <label className="">Forgot Password?</label>
//                         <label className="cursor-pointer"><input type="checkbox" onChange={handleCheckboxChange} checked={rememberMe}></input> Remember Me?</label>
//                     </div>
//                     <button type="submit" className="p-2 bg-slate-500 border border-slate-200 rounded-md"onClick={handleSubmit}
//                     >Log In</button>
//                     <p>Don{'\''}t have an account? Sign up here</p>
//                 </form>
//             </div>
//         </div>
//     )
// }


import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.get('rememberMe')) {
            setUsername(Cookies.get('username') || '');
            setPassword(Cookies.get('password') || '');
            setRememberMe(true);
        }
    }, []);

    const handleCheckboxChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/login/', { username, password });
            if (response.status === 200 ) {
                if (rememberMe) {
                    Cookies.set('username', username, { expires: 7 });
                     Cookies.set('password', password, { expires: 7 });
                    Cookies.set('rememberMe', 'true', { expires: 7 });

                } else {
                     Cookies.remove('username');
                     Cookies.remove('password');
                   Cookies.remove('rememberMe');

                }
                navigate('/');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred');
        }
    };

    return (
        <div className="loginPage bg-[#09090b] h-screen w-screen flex justify-center items-center flex-row">
            <div className="text-slate-200">
                <h2 className="text-5xl mb-10">Welcome</h2>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <label className="text-slate-200 text-2xl" htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            id="username" 
                            className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 ml-4 w-44 px-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className="text-slate-200 text-2xl" htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            id="password"
                            className="rounded-lg h-10 w-44 ml-4 px-2 bg-[#27272a] text-[#a3a3a3] border-gray-800 border-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between">
                        <label>Forgot Password?</label>
                        <label className="cursor-pointer">
                            <input 
                                type="checkbox" 
                                onChange={handleCheckboxChange} 
                                checked={rememberMe}
                            /> Remember Me?
                        </label>
                    </div>
                    <button 
                        type="submit" 
                        className="p-2 bg-slate-500 border border-slate-200 rounded-md"
                    >
                        Log In
                    </button>
                    <p>Don{'\''}t have an account? <Link to="/signup">Sign up here</Link></p>
                </form>
            </div>
        </div>
    );
}
