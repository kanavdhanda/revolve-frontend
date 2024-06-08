// src/utils/parseResponse.js
export const parseResponseText = (data) => {
    const defects = [];
    const numDefects = data["Number of defects"];
    
    for (let i = 1; i <= numDefects; i++) {
        const defect = data[i.toString()];
        const processes = [];
        const numProcesses = defect["Number of Processes"];
        
        for (let j = 1; j <= numProcesses; j++) {
            const process = defect[j.toString()];
            processes.push({
                name: process["Process Name"],
                description: process["Description"],
                price: process["Price"]
            });
        }
        
        defects.push({
            defect: defect["Defect"],
            processes,
            suggested: defect["Suggested"]
        });
    }
    
    return defects;
};
