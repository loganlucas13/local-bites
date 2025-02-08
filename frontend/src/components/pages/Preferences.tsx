import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Button } from '../ui/button';
import ActivityPreferences from '../ui/ActivityPreferences';
import DiningPreferences from '../ui/DiningPreferences';

const Preferences = () => {
    const location = useLocation();
    const { selectedActivities, selectedDining } = location.state as {
        selectedActivities: string[];
        selectedDining: string[];
    };

    return (
        <div className="flex flex-col min-h-screen w-screen justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-6 bg-white border-blue-100 border-2 rounded-2xl p-4 shadow-lg">
                <span className="text-3xl">Selected Activities</span>
            </div>
            <div className="flex flex-row gap-4">
                {selectedActivities.map((activity, index) => (
                    <ActivityPreferences key={index} activityType={activity} />
                ))}
            </div>

            <div className="flex flex-col justify-center items-center gap-6 bg-white border-blue-100 border-2 rounded-2xl p-4 shadow-lg">
                <span className="text-3xl">Selected Dining Options</span>
            </div>
            <div className="flex flex-row">
                {selectedDining.map((dining, index) => (
                    <DiningPreferences key={index} diningType={dining} />
                ))}
            </div>
        </div>
    );
};

export default Preferences;
