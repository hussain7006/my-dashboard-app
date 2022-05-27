import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './screens/Dashboard';
import Signup from './screens/Signup';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard/:name/*" element={<Dashboard />} />
                <Route path="/" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;