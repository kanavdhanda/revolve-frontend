// import axios from 'axios';
// import { useState } from 'react';
// export default function Sell() {

//   const [image, setImage] = useState(null);
//   const handleFileChange = (event) => {
//     setImage(event.target.files[0]);
//   };


//   // Function to handle form submission
// const handleSubmit = async (event) => {
//   event.preventDefault();

//   // Create form data
//   const formData = new FormData();
//   formData.append('image', image);
//   formData.append('material', document.getElementById('material').value);
//   formData.append('grade', document.getElementById('grade').value);
//   formData.append('condition', document.getElementById('condition').value);
//   formData.append('weight', document.getElementById('weight').value);

//   try {
//     // Send POST request to your DRF API
//     const response = await axios.post('http://your-drf-api.com/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     });

//     // Handle response
//     console.log('Image and form data uploaded successfully!', response.data);
//   } catch (error) {
//     // Handle errors
//     console.log('An error occurred while uploading the image and form data.', error);
//   }
// };
//   return (


//     <div className="loginPage bg-[#09090b] text-slate-200 h-screen w-screen flex justify-center items-center flex-row">
      
//      {/* Navbar */}
//       <div className="flex justify-between items-start w-full absolute top-0">
//         <ul>
//           <li className="m-2">
//             Home{">"}Chat
//           </li>
//         </ul>
//         <ul className="inline-flex ">
//           <li className="m-2"> About </li>
//           <li className="m-2"> Want to Buy?</li>
//           <li className="m-2"> logout</li>
//         </ul>
//       </div>



//         {/* Form */}
//       <div className="flex justify-center items-center flex-col gap-2 bg-">
//         <h3 className="text-3xl mb-4">Sell Scrap</h3>


//         <form className="flex flex-col gap-4 mx-2 " onSubmit={handleSubmit}>


//             <div className="flex flex-row mx-4">



//               <div className="flex flex-col justify-between mr-4">
//                 <label className="text-slate-200 mb-1 text-center" htmlFor="material">
//                   Material
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Iron"
//                   id="material"
//                   required
//                   className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-44 px-2"
//                 ></input>
//               </div>



//               <div className="flex flex-col justify-between">
//                 <label className="text-slate-200 text-center" htmlFor="defects">
//                   Grade
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="xx"
//                   id="grade"
//                   required
//                   className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-44 px-2"
//                 ></input>
//               </div>


//             </div>


//             <div className="mx-2">
//               <div className="flex flex-col justify-between mx-2">
//                 <label className="text-slate-200 mb-1 px-2" htmlFor="defects">
//                   Condition
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Rust"
//                   id="condition"
//                   required
//                   className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-full px-2"
//                 ></input>
//               </div>
//             </div>

//             <div className="mx-2">
//               <div className="flex flex-col justify-between ml-2">
//                 <label className="text-slate-200 mb-1 px-2" htmlFor="defects">
//                   Weight{"("}in tonnes{")"}
//                 </label>
//                 <div>
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="1"
//                     id="weight"
//                     pattern="\d*"
//                     className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-7/12 mr-5 px-2"
//                     required
//                   ></input>
//                 </div>
//                   <input type="file" accept="image/*" className="w-full" onChange={handleFileChange} />
//                   </div>
//               </div>
//               <button className="w-4/12 border-gray-800 border-2 rounded-lg h-10 ">Submit</button>


//             </div>

//         </form>
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
// import { IoMdSend } from 'react-icons/io';
// import logo from '../assets/logo.png';
// import Cookies from 'js-cookie';

import './buy.css';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Sell(){
    const [text, setText] = useState('');
    const [condition, setCondition] = useState('');
    const [loading, setLoading] = useState(false);
      const [image, setImage] = useState(null);
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };
    const navigate = useNavigate();
    // const formData = new FormData();
    //   formData.append('image', image);
    //   formData.append('material', document.getElementById('material').value);
    //   formData.append('grade', document.getElementById('grade').value);
    //   formData.append('condition', document.getElementById('condition').value);
    //   formData.append('weight', document.getElementById('weight').value);
    
    //   try {
    //     // Send POST request to your DRF API
    //     const response = await axios.post('http://your-drf-api.com/upload', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     });
    
    //     // Handle response
    //     console.log('Image and form data uploaded successfully!', response.data);
    //   } catch (error) {
    //     // Handle errors
    //     console.log('An error occurred while uploading the image and form data.', error);
    //   }
    // };

    const handleLogout = () => {
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('rememberMe');
        navigate('/login');
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
   const seller_name = Cookies.get('username');

      const formData = new FormData();
      formData.append('image', image);
      formData.append('material', document.getElementById('material').value);
      formData.append('grade', document.getElementById('grade').value);
      formData.append('condition', document.getElementById('condition').value);
      formData.append('weight', document.getElementById('weight').value);
      formData.append('seller', seller_name);
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/sell/', 
                formData
            // , {headers : { 
            //     'Content-Type': 'multipart/form-data'
            //   }


            // },
                );
            console.log(response.data);
            alert('Post successuful')
            setText('');
            setCondition('');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
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
                        <li className="my-2 ml-4"><Link to="/">Home</Link>{">"}Sell</li>
                    </ul>
                    <ul className="inline-flex ">
                        <li className="m-2"> About </li>
                        <li className="m-2"> <Link to="/buy">Want to Buy?</Link></li>
                        <li className="my-2 ml-2 mr-4 cursor-pointer" onClick={handleLogout}> Logout</li>  
                    </ul>
                </nav>
                {/* <div className="flex flex-row">
                    <h2 className="text-5xl mb-20 font-bold">Welcome to ReVolve</h2>
                    <img src={logo} className="h-14" alt="Logo"/>
                </div>  
                <form onSubmit={handleSubmit} className="w-4/12 flex flex-col items-center">
                    <input 
                        type="text" 
                        className="border-gray-800 border-2 bg-[#27272a] text-[#a3a3a3] text-sm w-full rounded-3xl h-9 px-4 mb-4" 
                        placeholder="What would you like to sell today?" 
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                    <input 
                        type="text" 
                        className="border-gray-800 border-2 bg-[#27272a] text-[#a3a3a3] text-sm w-full rounded-3xl h-9 px-4 mb-4" 
                        placeholder="Condition of the product" 
                        onChange={(e) => setCondition(e.target.value)}
                        value={condition}
                    />
                    <button type="submit">
                        <IoMdSend className={`ml-2 ${text && condition ? 'text-slate-200' : 'text-gray-500'}`} size={24} />
                    </button>
                </form> */}
                 <div className="flex justify-center items-center flex-col gap-2 bg-">
         <h3 className="text-3xl mb-4">Sell Scrap</h3>


       <form className="flex flex-col gap-4 mx-2 " onSubmit={handleSubmit}>


          <div className="flex flex-row mx-4">



          <div className="flex flex-col justify-between mr-4">
              <label className="text-slate-200 mb-1 text-center" htmlFor="material">
                   Material
                 </label>
                <input
                  type="text"
                  placeholder="Iron"
                  id="material"
                  required
                  className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-44 px-2"
                ></input>
              </div>



              <div className="flex flex-col justify-between">
                <label className="text-slate-200 text-center" htmlFor="defects">
                  Grade
                </label>
                <input
                  type="text"
                  placeholder="xx"
                  id="grade"
                  required
                  className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-44 px-2"
                ></input>
              </div>


            </div>


            <div className="mx-2">
              <div className="flex flex-col justify-between mx-2">
                <label className="text-slate-200 mb-1 px-2" htmlFor="defects">
                  Condition
                </label>
                <input
                  type="text"
                  placeholder="Rust"
                  id="condition"
                  required
                  className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-full px-2"
                ></input>
              </div>
            </div>

            <div className="mx-2">
              <div className="flex flex-col justify-between ml-2">
                <label className="text-slate-200 mb-1 px-2" htmlFor="defects">
                  Weight{"("}in tonnes{")"}
                </label>
                <div>
                <div>
                  <input
                    type="text"
                    placeholder="1"
                    id="weight"
                    pattern="\d*"
                    className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-7/12 mr-5 px-2"
                    required
                  ></input>
              <button className="w-3/12 border-gray-800 border-2 rounded-lg h-10 ">Submit</button>
                  </div>

                  <input type="file" accept="image/*" className="w-full my-2 " onChange={handleFileChange} />
                  </div>
              </div>


            </div>

        </form>
      </div>




            </div>


        )
    );
}
