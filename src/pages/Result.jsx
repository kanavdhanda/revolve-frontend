import { useContext } from 'react';
import ResponseContext from '../context/ResponseContext';
import Card from '../components/card';

export default function Result() {
    const { response } = useContext(ResponseContext);

    return (
        <div className="bg-[#09090b] h-screen w-screen text-slate-200 flex flex-col justify-center items-center">
            <h1 className="text-5xl mb-20 font-bold">Results</h1>
            {response ? (
                <div className="flex flex-wrap justify-center">
                    {/* Map through the response data and render a Card for each item */}
                    {response.map((item, index) => (
                        <Card
                            key={index}
                            company={item.company} // Adjust these properties as per your response structure
                            condition={item.condition}
                            // price={item.price}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <p>No results found.</p>
                    <Card company="Hello World" condition="Sexy" price="69" />
                </div>
            )}
        </div>
    );
}
