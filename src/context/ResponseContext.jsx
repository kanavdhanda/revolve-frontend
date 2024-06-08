import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

ResponseProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};