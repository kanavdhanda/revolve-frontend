import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cname , setCname] = useState('');
    const [email , setEmail] = useState('');
    const [contact , setCnumber] = useState('');


    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"

          };
        try {
            const response = await axios.post('http://127.0.0.1:8000/signup/', { email, username, password, contact, cname }, { headers});
            if (response.status === 201) {
                navigate('/login');
            } else if(response.status === 400) {
                alert('User already exists');
            }
            else {
                alert('An error occurred');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred');
        }
    };

    return (
        <div className="signupPage bg-[#09090b] h-screen w-screen flex justify-center items-center flex-row">
            <div className="text-slate-200">
                <h2 className="text-5xl mb-10">Sign Up</h2>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="flex justify-between">
                        <label className="text-slate-200 text-2xl" htmlFor="company name">Company Name:</label>
                        <input 
                            type="text" 
                            placeholder="kd corp" 
                            className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 ml-4 w-44 px-2"
                            value={cname}
                            onChange={(e) => setCname(e.target.value)}
                            required
                        />
                    </div>
                <div className="flex justify-between">
                        <label className="text-slate-200 text-2xl" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 ml-4 w-44 px-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className="text-slate-200 text-2xl" htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 ml-4 w-44 px-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className="text-slate-200 text-2xl" htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="rounded-lg h-10 w-44 ml-4 px-2 bg-[#27272a] text-[#a3a3a3] border-gray-800 border-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className="text-slate-200 text-2xl" htmlFor="password">Contact Number:</label>
                        <input 
                            type="tel" 
                            placeholder="+91 0000000000" 
                            className="rounded-lg h-10 w-44 ml-4 px-2 bg-[#27272a] text-[#a3a3a3] border-gray-800 border-2"
                            value={contact}
                            onChange={(e) => setCnumber(e.target.value)}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="p-2 bg-slate-500 border border-slate-200 rounded-md"
                    >
                        Sign Up
                    </button>
                    <p>Already have an account? <Link to="/login">Log in here</Link></p>
                </form>
            </div>
        </div>
    );
}
