// src/pages/FResult.jsx
import { useContext } from 'react';
import ResponseContext from '../context/ResponseContext';

const FResult = () => {
    const { response } = useContext(ResponseContext);

    if (!response) {
        return (
            <div className="bg-[#09090b] h-screen w-screen text-slate-200 flex flex-col justify-center items-center">
                <h1 className="text-5xl mb-20 font-bold">Results</h1>
                <p>No results found.</p>
            </div>
        );
    }

    const renderProcesses = (processData) => {
        return Object.keys(processData).map((key) => {
            if (key !== 'Defect' && key !== 'Suggested') {
                const process = processData[key];
                return (
                    <div key={key} className="mb-4">
                        <h3 className="text-xl font-semibold">{process['Process Name']}</h3>
                        <p>{process.Description}</p>
                        <p>Price: {process.Price}</p>
                    </div>
                );
            }
            return null;
        });
    };

    return (
        <div className="bg-[#09090b] h-screen w-screen text-slate-200 flex flex-col justify-center items-center">
            <h1 className="text-5xl mb-20 font-bold">Results</h1>
            <div className="p-4">
                <h2 className="text-3xl font-bold mb-4">{response.Defect}</h2>
                {renderProcesses(response)}
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Suggested Process</h3>
                    <p>{response.Suggested.Process}</p>
                    <p>Carbon Footprint: {response.Suggested.Carbon}</p>
                </div>
            </div>
        </div>
    );
};

export default FResult;
