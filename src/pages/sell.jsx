export default function Sell() {
  return (


    <div className="loginPage bg-[#09090b] text-slate-200 h-screen w-screen flex justify-center items-center flex-row">
      
     {/* Navbar */}
      <div className="flex justify-between items-start w-full absolute top-0">
        <ul>
          <li className="m-2">
            Home{">"}Select{">"}Chat
          </li>
        </ul>
        <ul className="inline-flex ">
          <li className="m-2"> About </li>
          <li className="m-2"> would you like to Buy?</li>
          <li className="m-2"> logout</li>
        </ul>
      </div>



        {/* Form */}
      <div className="flex justify-center items-center flex-col gap-2">
        <h3>Sell Scrap</h3>


        <form className="flex flex-col gap-2 mx-2">


            <div className="flex flex-row mx-4">



              <div className="flex flex-col justify-between mr-4">
                <label className="text-slate-200 mb-1 text-center" htmlFor="material">
                  Material
                </label>
                <input
                  type="text"
                  placeholder="Iron"
                  id="material"
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
                  className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-44 px-2"
                ></input>
              </div>


            </div>


            <div className="mx-2">
              <div className="flex flex-col justify-between">
                <label className="text-slate-200 " htmlFor="defects">
                  Condition
                </label>
                <input
                  type="text"
                  placeholder="rust"
                  id="condition"
                  className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-full "
                ></input>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-between">
                <label className="text-slate-200 " htmlFor="defects">
                  Weight{"("}in tonnes{")"}
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="rust"
                    id="weight"
                    className="rounded-lg bg-[#27272a] text-[#a3a3a3] h-10 border-gray-800 border-2 w-44"
                  ></input>
                  <button>Submit</button>
                </div>
              </div>

            </div>

        </form>
      </div>
    </div>
  );
}
