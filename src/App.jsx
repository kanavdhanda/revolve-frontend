import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Buy from './pages/buy';
import Sell from './pages/sell';
import Result from './pages/Result';
import Signup from './pages/Signup';
import Cookies from 'js-cookie';
import { ResponseProvider } from './context/ResponseContext';

function App() {
    const isAuthenticated = Cookies.get('username') && Cookies.get('password');

    return (
        <ResponseProvider>
            <Router>
                <Routes>
                    <Route path="/" element={isAuthenticated ? <Navigate to="/buy" /> : <Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/buy" element={isAuthenticated ? <Buy /> : <Navigate to="/login" />} />
                    <Route path="/sell" element={isAuthenticated ? <Sell /> : <Navigate to="/login" />} />
                    <Route path="/result" element={isAuthenticated ? <Result /> : <Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </ResponseProvider>
    );
}

export default App;
