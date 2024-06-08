import React, { createContext, useState } from 'react';

const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
    const [response, setResponse] = useState(null);

    return (
        <ResponseContext.Provider value={{ response, setResponse }}>
            {children}
        </ResponseContext.Provider>
    );
};

export default ResponseContext;
