import React from 'react';
import './App.css';
import { Login } from './pages/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/dashboard';
import { AUTH_TOKEN } from './constants/constants';

function App() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <>
                        {authToken ? (
                            <Route path="/" element={<Dashboard />} />
                        ) : (
                            <Route path="/" element={<Login />} />
                        )}
                    </>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
