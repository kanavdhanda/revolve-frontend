import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ResponseContext from '../context/ResponseContext';
import PropTypes from 'prop-types';
import run from './run';

function Card({ company, condition }) {
    const navigate = useNavigate();
    const { setResponse } = useContext(ResponseContext);

    const handleClick = async () => {
        console.log("clicked");
        const response = await run(condition);
        if (response) {
            response.company = company;  // Add the company name to the response
            setResponse(response);
            navigate('/fresult');
        } else {
            console.error("No response received or failed to parse JSON");
        }
    };

    return (
        <div className="card bg-[#27272a] text-gray-200 w-72 h-72 rounded-lg p-4" onClick={handleClick}>
            <div className="flex flex-col gap-2 w-full h-full justify-between">
                <div className="gap-2">
                    <h2 className="text-2xl font-semibold text-white">{company}</h2>
                    <p>{condition}</p>
                </div>
                <div>
                    {/* <p className=""><img src={props.image} /></p> */}
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    company: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
};

export default Card;
