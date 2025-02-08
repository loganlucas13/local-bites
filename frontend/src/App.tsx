import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Startup from './components/pages/Startup';
import Plan from './components/pages/Plan';
import Preferences from './components/pages/Preferences';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Startup />}></Route>
                <Route path="plan" element={<Plan />}></Route>
                <Route
                    path="plan/preferences"
                    element={<Preferences />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
