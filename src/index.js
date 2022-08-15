import React from 'react';
import './fonts.css';
import './index.css';
import App from './App';
import Test from "./test";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="test" element={<Test />} />
        </Routes>
    </BrowserRouter>
);


