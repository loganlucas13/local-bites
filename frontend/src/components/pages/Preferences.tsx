import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Button } from '../ui/button';
import ActivityPreferences from '../ui/ActivityPreferences';

import { ArrowBigLeft } from 'lucide-react';
import { ArrowBigRight } from 'lucide-react';

const Preferences = () => {
    const location = useLocation();
    const { selectedDining } = location.state as {
        selectedDining: string[];
    };

    return (
        <div className="flex flex-col min-h-screen w-screen justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-6 bg-white border-blue-100 border-2 rounded-2xl p-4 shadow-lg">
                <span className="text-3xl">Selected Activities</span>
            </div>
            <div className="flex flex-row gap-4">
                {selectedDining.map((activity, index) => (
                    <ActivityPreferences
                        key={index}
                        activityType={activity}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row gap-4">
                <Link to="/plan">
                    <Button variant="back" size="lg">
                        <ArrowBigLeft />
                        Back
                    </Button>
                </Link>
                <Link
                    to={{ pathname: '/plan/swipe' }}
                    state={{ selectedDining }}
                >
                    <Button variant="next" size="lg">
                        Next
                        <ArrowBigRight />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Preferences;
