



import PropTypes from 'prop-types';

import rust from '../assets/rusted.avif';
import oxide from '../assets/oxide.jpeg';

function Card({ company, condition, onClick}) {
  

    // const headers = {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*"

    //   };
   

    return (
        <div className="card bg-[#27272a] text-gray-200 w-72 h-72 rounded-lg p-4 m-2" onClick={onClick}>
            <div className="flex flex-col gap-2 w-full h-full justify-between ">
                <div className="gap-2">
                    <h2 className="text-2xl font-semibold text-white">{company}</h2>
                    <p>{condition}</p>
                </div>
                <div>
                {condition === "scales & oxide" ? 
    <p className=""><img src={oxide} /></p> 
    : 
    <p className=""><img src={rust} /></p>
}
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    company: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired

};

export default Card;
