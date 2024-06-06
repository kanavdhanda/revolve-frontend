import Card from '../components/card'
import PropTypes from 'prop-types';




const Result = ({ f }) => {
    const result = f.map((item, index) => <Card key={index} company={item.company} condition={item.condition} />)
                    
    return(
        <div className="bg-[#09090b] h-screen w-screen text-slate-200 ">
            <div className="flex flex-col gap-2 h-screen items-center justify-center">
                <h1 className="text-4xl font-bold">Available Sellers</h1>
                <div className="flex flex-row gap-2 mx-4 ">
                {/* <Card />
                <Card />
                <Card /> */}
                {/* <Card /> */}
                {result}
                <Card company="Hello World" condition="Sexy" price="69" />
                </div>
            </div>
        
        <div className="card-container">
          
        </div>
      </div>
    )
    
    // rest of your component

}

Result.propTypes = {
    f: PropTypes.arrayOf(PropTypes.shape({
        company: PropTypes.string.isRequired,
        condition: PropTypes.string.isRequired,
    })).isRequired,
};

export default Result;