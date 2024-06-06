import PropTypes from 'prop-types';
 function Card(props){
    return(
        <div className="card bg-[#27272a] text-slate-200 w-72 h-72 rounded-lg p-4">
            <div className="flex flex-col gap-2 w-full h-full justify-around ">
                <h2 className="text-xl">{props.company}</h2>
                <div>
                    <p>{props.condition}</p>
                    {/* <p><img src={props.image} /></p> */}
                    <p>{props.condition}</p>
                    <p>{props.price}</p>
            </div>
            
        </div></div>
    )
    
}
Card.propTypes = {
    company: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number
};

export default Card;