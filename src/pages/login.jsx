export default function Sell(){
    return(
        <div className="loginPage bg-[#09090b] h-screen w-screen flex justify-center items-center flex-row">
            <div className=" text-slate-200">
                <h2 className="text-5xl mb-10 ">Welcome</h2>
                <form className="flex flex-col gap-3">
                    <div className="flex justify-between">
                    <label className="text-slate-200 text-2xl" htmlFor="username">Username</label>
                    <input type="text" 
                    placeholder="Username" 
                    id="username" 
                    className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 ml-4 w-44 px-2"></input>
                    </div>
                    <div className="flex justify-between">
                        <label className="text-slate-200 text-2xl"htmlFor="username">Password</label>
                        <input type="password" placeholder="Password" className="rounded-lg h-10 w-44 ml-4 px-2 bg-[#27272a] text-[#a3a3a3] border-gray-800 border-2"></input>
                    </div>
                    <div className="flex justify-between">
                        <label className="">Forgot Password?</label>
                        <label className="cursor-pointer"><input type="checkbox"></input> Remeber Me?</label>
                    </div>
                    <button type="submit" className="p-2 bg-slate-500 border border-slate-200 rounded-md"onClick={(e)=>{
                        e.preventDefault();
                        console.log("submit")
                    }}>Log In</button>
                    <p>Don{'\''}t have an account? Sign up here</p>
                </form>
            </div>
        </div>
    )
}