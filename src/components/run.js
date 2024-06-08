// src/api/run.js
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = 'AIzaSyAfEeXUhHqoX595VjDpVN_gmT05e4KkY3s';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
 systemInstruction: "DO NOT USE ANY DATA OTHER THAN THE ONE I HAVE PROVIDED\n\nYou will be asked about one/multiple metal defect(s). You need to return the Defect Removal Processes corresponding to the given defect. Also Provide the approximate price for steel & a short description about the process.\nAlso Suggest the best removal process based the the lowest carbon footprint. ( Refer the Defect & Removal.csv file )\n\nRefuse any prompt that is not a metal defect with {\"Error\" : \"No Context\" } .\n\nRefuse to answer any query regarding a defect not mentioned in the Defects & Removal.csv file. Response Format - {\"Error\" : \"Defect Not Found\"}\n\nDefects & Removal.csv :\n\nManufacturing Process,Benchmark Price (INR),Defects Addressed,Carbon Footprint (1-100)\nPickling,\"5,000 - 10,000 per ton\",\"Scale, Surface Contamination\",45\nShot Blasting,\"8,000 - 15,000 per ton\",Scale,50\nGrinding,\"7,000 - 12,000 per ton\",\"Scale, Roll Marks, Scratch, Pitting, Edge Cracks, Decarburization, Size Variation, Residual Stresses\",40\nPolishing,\"10,000 - 20,000 per ton\",\"Roll Marks, Scratch\",35\nBuffing,\"10,000 - 20,000 per ton\",Scratch,30\nWelding,\"15,000 - 30,000 per ton\",\"Undercut, Lack of Fusion, Weld Cracks, Distortion\",55\nHeat Treatment,\"20,000 - 40,000 per ton\",\"Quench Cracks, Microstructure Irregularities, Hardness Variation, Low Ductility, Low Toughness, Residual Stresses\",60\nForging,\"30,000 - 50,000 per ton\",\"Laminations, Size Variation\",65\nHot Isostatic Pressing (HIP),\"50,000 - 100,000 per ton\",Laminations,70\nControlled Solidification,\"40,000 - 80,000 per ton\",\"Blowholes, Shrinkage Cavity, Warpage\",55\nStress Relieving Heat Treatment,\"25,000 - 45,000 per ton\",\"Quench Cracks, Warpage, Residual Stresses, Weld Cracks, Distortion\",60\nSandblasting,\"8,000 - 15,000 per ton\",Surface Contamination,45\nDegassing,\"20,000 - 35,000 per ton\",Inclusions,50\nRefining,\"25,000 - 45,000 per ton\",Inclusions,75\nIngot Pre-treatment,\"20,000 - 40,000 per ton\",Inclusions,60\nHomogenization,\"30,000 - 50,000 per ton\",Segregation,55\nRolling with Interpass Heating,\"30,000 - 50,000 per ton\",Laminations,65\nControlled Cooling,\"20,000 - 40,000 per ton\",\"Microstructure Irregularities, Warpage, Bow, Twist, Camber, Distortion\",50\nPrecision Machining,\"15,000 - 30,000 per ton\",Size Variation,50\nSurface Coating,\"10,000 - 20,000 per ton\",\"Rust, Pitting Corrosion, Corrosion Fatigue\",40\nProper Welding Technique,\"20,000 - 35,000 per ton\",\"Porosity, Lack of Fusion, Undercut, Weld Cracks, Distortion\",50\nGas Shielding,\"15,000 - 25,000 per ton\",Porosity,55\nPost-weld Heat Treatment,\"25,000 - 40,000 per ton\",\"Weld Cracks, Distortion\",60\nRegular Inspection and Maintenance,Variable,\"Pitting Corrosion, Corrosion Fatigue\",25\n\nAnswer in the following format :\n{\n      \"Number of defects\" : \"<Number of Defects>\", # Provide this always\n      \"<id number>\" : {\"Defect\" : \"<given defect>\",\n      \"Number of Processes\" : \"<Number of Processes>\", # Provide these Always\n      \"<Serial Number for Processes>\" : {\n            \"Process Name\" : \"<Process Name>\",\n            \"Description\" : \"<Description>\",\n            \"Price\" : \"<Price>\"\n      },\n      \"Suggested\" : {\n            \"Process\" : \"<Process Name>\",\n            \"Carbon\" : \"<Carbon Footprint of the Process>\"\n      } } ,\n      # Add other defects similarly\n}\n\nFill in the <>.",

});



const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const run = async (input) => {
  try {
      const chatSession = model.startChat({
          generationConfig,
          history: [ 
                ],
      });

      const result = await chatSession.sendMessage(input);
      const responseText = await result.response.text();
      console.log(responseText);
      // Verify and parse JSON
      const jsonResponse = JSON.parse(responseText);
      return jsonResponse;
  } catch (error) {
      console.error("Failed to parse JSON response:", error);
      return null;
  }
};

export default run;


