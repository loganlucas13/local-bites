import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Button } from '../ui/button';

const Preferences = () => {
    const location = useLocation();
    const { selectedActivities, selectedDining } = location.state as {
        selectedActivities: string[];
        selectedDining: string[];
    };

    return (
        <div className="flex flex-col min-h-screen w-screen justify-center items-center gap-10"></div>
    );
};

export default Preferences;
