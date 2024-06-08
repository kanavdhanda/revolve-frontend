import { useNavigate } from 'react-router-dom'; 
import { useContext } from 'react';
import ResponseContext from '../context/ResponseContext';

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
import PropTypes from 'prop-types';



const apiKey = 'AIzaSyAfEeXUhHqoX595VjDpVN_gmT05e4KkY3s';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction: "DO NOT USE ANY DATA OTHER THAN THE ONE I HAVE PROVIDED\n\nYou will be asked about a metal defect. You need to return the Defect Removal Processes corresponding to the given defect. Also Provide the approximate price for steel & a short description about the process.\nAlso Suggest the best removal process based the the lowest carbon footprint. ( Refer the Defect & Removal.csv file )\n\nRefuse any prompt that is not a metal defect with {\"Error\" : \"No Context\" } .\n\nRefuse to answer any query regarding a defect not mentioned in the Defects & Removal.csv file. Response Format - {\"Error\" : \"Defect Not Found\"}\n\nDefects & Removal.csv :\n\nManufacturing Process,Benchmark Price (INR),Defects Addressed,Carbon Footprint (1-100)\nPickling,\"5,000 - 10,000 per ton\",\"Scale, Surface Contamination\",45\nShot Blasting,\"8,000 - 15,000 per ton\",Scale,50\nGrinding,\"7,000 - 12,000 per ton\",\"Scale, Roll Marks, Scratch, Pitting, Edge Cracks, Decarburization, Size Variation, Residual Stresses\",40\nPolishing,\"10,000 - 20,000 per ton\",\"Roll Marks, Scratch\",35\nBuffing,\"10,000 - 20,000 per ton\",Scratch,30\nWelding,\"15,000 - 30,000 per ton\",\"Undercut, Lack of Fusion, Weld Cracks, Distortion\",55\nHeat Treatment,\"20,000 - 40,000 per ton\",\"Quench Cracks, Microstructure Irregularities, Hardness Variation, Low Ductility, Low Toughness, Residual Stresses\",60\nForging,\"30,000 - 50,000 per ton\",\"Laminations, Size Variation\",65\nHot Isostatic Pressing (HIP),\"50,000 - 100,000 per ton\",Laminations,70\nControlled Solidification,\"40,000 - 80,000 per ton\",\"Blowholes, Shrinkage Cavity, Warpage\",55\nStress Relieving Heat Treatment,\"25,000 - 45,000 per ton\",\"Quench Cracks, Warpage, Residual Stresses, Weld Cracks, Distortion\",60\nSandblasting,\"8,000 - 15,000 per ton\",Surface Contamination,45\nDegassing,\"20,000 - 35,000 per ton\",Inclusions,50\nRefining,\"25,000 - 45,000 per ton\",Inclusions,75\nIngot Pre-treatment,\"20,000 - 40,000 per ton\",Inclusions,60\nHomogenization,\"30,000 - 50,000 per ton\",Segregation,55\nRolling with Interpass Heating,\"30,000 - 50,000 per ton\",Laminations,65\nControlled Cooling,\"20,000 - 40,000 per ton\",\"Microstructure Irregularities, Warpage, Bow, Twist, Camber, Distortion\",50\nPrecision Machining,\"15,000 - 30,000 per ton\",Size Variation,50\nSurface Coating,\"10,000 - 20,000 per ton\",\"Rust, Pitting Corrosion, Corrosion Fatigue\",40\nProper Welding Technique,\"20,000 - 35,000 per ton\",\"Porosity, Lack of Fusion, Undercut, Weld Cracks, Distortion\",50\nGas Shielding,\"15,000 - 25,000 per ton\",Porosity,55\nPost-weld Heat Treatment,\"25,000 - 40,000 per ton\",\"Weld Cracks, Distortion\",60\nRegular Inspection and Maintenance,Variable,\"Pitting Corrosion, Corrosion Fatigue\",25\n\nAnswer in the following format :\n{\n      \"Defect\" : \"<given defect>\",\n      \"<Serial Number for Processes>\" : {\n            \"Process Name\" : \"<Process Name>\",\n            \"Description\" : \"<Description>\",\n            \"Price\" : \"<Price>\"\n      },\n      \"Suggested\" : {\n            \"Process\" : \"<Process Name>\",\n            \"Carbon\" : \"<Carbon Footprint of the Process>\"\n      },\n}\n\nFill in the <>.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(text) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Scale"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n      \"Defect\" : \"Scale\",\n      \"Process 1\" : {\n            \"Process Name\" : \"Pickling\",\n            \"Description\" : \"Pickling is a chemical process used to remove scale, rust, and other impurities from the surface of metal. The metal is immersed in a bath of acid, typically hydrochloric or sulfuric acid, which dissolves the impurities. Pickling is a common process for preparing metal for further processing, such as painting or plating.\",\n            \"Price\" : \"5,000 - 10,000 per ton\"\n      },\n      \"Process 2\" : {\n            \"Process Name\" : \"Shot Blasting\",\n            \"Description\" : \"Shot blasting is a surface preparation technique that uses a high-velocity stream of abrasive particles to remove scale, rust, and other surface contaminants. This process is effective for cleaning and preparing metal surfaces for painting, coating, or welding.\",\n            \"Price\" : \"8,000 - 15,000 per ton\"\n      },\n      \"Process 3\" : {\n            \"Process Name\" : \"Grinding\",\n            \"Description\" : \"Grinding is a mechanical process that uses an abrasive tool to remove material from the surface of metal. This process can be used to remove scale, roll marks, scratches, and other surface defects. Grinding is a versatile process that can be used on a variety of metals.\",\n            \"Price\" : \"7,000 - 12,000 per ton\"\n      },\n      \"Suggested\" : {\n            \"Process\" : \"Grinding\",\n            \"Carbon\" : \"40\"\n      },\n}\n```\n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "Scale"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n      \"Defect\" : \"Scale\",\n      \"Process 1\" : {\n            \"Process Name\" : \"Pickling\",\n            \"Description\" : \"Pickling is a chemical process used to remove scale, rust, and other impurities from the surface of metal. The metal is immersed in a bath of acid, typically hydrochloric or sulfuric acid, which dissolves the impurities. Pickling is a common process for preparing metal for further processing, such as painting or plating.\",\n            \"Price\" : \"5,000 - 10,000 per ton\"\n      },\n      \"Process 2\" : {\n            \"Process Name\" : \"Shot Blasting\",\n            \"Description\" : \"Shot blasting is a surface preparation technique that uses a high-velocity stream of abrasive particles to remove scale, rust, and other surface contaminants. This process is effective for cleaning and preparing metal surfaces for painting, coating, or welding.\",\n            \"Price\" : \"8,000 - 15,000 per ton\"\n      },\n      \"Process 3\" : {\n            \"Process Name\" : \"Grinding\",\n            \"Description\" : \"Grinding is a mechanical process that uses an abrasive tool to remove material from the surface of metal. This process can be used to remove scale, roll marks, scratches, and other surface defects. Grinding is a versatile process that can be used on a variety of metals.\",\n            \"Price\" : \"7,000 - 12,000 per ton\"\n      },\n      \"Suggested\" : {\n            \"Process\" : \"Grinding\",\n            \"Carbon\" : \"40\"\n      },\n}\n```"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "scratch\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n      \"Defect\" : \"Scratch\",\n      \"Process 1\" : {\n            \"Process Name\" : \"Grinding\",\n            \"Description\" : \"Grinding is a mechanical process that uses an abrasive tool to remove material from the surface of metal. This process can be used to remove scale, roll marks, scratches, and other surface defects. Grinding is a versatile process that can be used on a variety of metals.\",\n            \"Price\" : \"7,000 - 12,000 per ton\"\n      },\n      \"Process 2\" : {\n            \"Process Name\" : \"Polishing\",\n            \"Description\" : \"Polishing is a finishing process that uses an abrasive material to smooth and shine the surface of metal. It removes surface imperfections, such as scratches and burrs, to enhance the metal's appearance and prepare it for plating or other finishing treatments.\",\n            \"Price\" : \"10,000 - 20,000 per ton\"\n      },\n      \"Process 3\" : {\n            \"Process Name\" : \"Buffing\",\n            \"Description\" : \"Buffing is a surface finishing process that uses a rotating wheel with a fine abrasive compound to polish and smooth metal surfaces. It is typically used after polishing to achieve a high level of shine and luster on the metal.\",\n            \"Price\" : \"10,000 - 20,000 per ton\"\n      },\n      \"Suggested\" : {\n            \"Process\" : \"Buffing\",\n            \"Carbon\" : \"30\"\n      },\n}\n```\n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "what is the meaning of life?"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n      \"Error\" : \"No Context\" \n}\n``` \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "1+1"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n      \"Error\" : \"No Context\" \n}\n``` \n"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(text);
  const responseText = await result.response.text();
  console.log(responseText);
  return responseText;
}

  
  
  
  
  function Card({ company, condition }) {
    const navigate = useNavigate();
    const { setResponse } = useContext(ResponseContext);


   
    const handleClick = async () => {
        console.log("clicked");
        const response = await run(condition); // Assume 'condition' is the defect
        setResponse(response);

        navigate('/fresult');
    };

    return (
        <div className="card bg-[#27272a] text-gray-200 w-72 h-72 rounded-lg p-4">
            <div className="flex flex-col gap-2 w-full h-full justify-between" onClick={handleClick}>
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
    // image: PropTypes.string,
};

export default Card;