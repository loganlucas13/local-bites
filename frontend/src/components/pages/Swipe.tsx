import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../ui/button';
import ActivitySwipe from '../ui/ActivitySwipe';

// TODO: get data from API and dynamically display activityswipe components

type location = {
    name: string;
    description: string;
    picture: string;
    rating: string;
    cost: string;
    location: string;
    phone: string;
};

const Swipe = () => {
    const [locations, setLocations] = useState([
        {
            name: 'Monteverde',
            description:
                'Stylish spot serving refined, contemporary Italian fare.',
            picture:
                'https://lh5.googleusercontent.com/p/AF1QipMVOrUckJnQu7C2jkBwjaSd7PPbQaFlqyQgWhSH=w408-h255-k-no',
            rating: '4.7',
            cost: '$$$',
            location: '1020 W Madison St.',
            phone: '123-456-7890',
        },
        {
            name: 'Alinea',
            description: 'Innovative fine dining with an artistic flair.',
            picture: 'https://example.com/alinea.jpg',
            rating: '4.9',
            cost: '$$$$',
            location: '1723 N Halsted St.',
            phone: '123-456-7890',
        },
    ]);

    const [chosenLocations, setChosenLocations] = useState<location[]>([]);

    const handleThumbsUp = (location: location) => {
        setChosenLocations((prevLocations) => [...prevLocations, location]);
    };

    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

    const showNextPreview = () => {
        setCurrentLocationIndex((prevIndex) => prevIndex + 1);
    };

    const currentLocation = locations[currentLocationIndex];

    if (currentLocationIndex >= locations.length) {
        return (
            <div className="flex flex-col min-h-screen w-screen justify-center items-center gap-10 mt-6">
                <div className="border-2 border-blue-100 shadow-lg rounded-2xl bg-white text-3xl px-4 py-2">
                    <span>All Locations Viewed!</span>
                </div>
                {chosenLocations.map((loc, index) => (
                    <div
                        key={index}
                        className="border-2 border-blue-100 px-8 py-4 rounded-2xl bg-white shadow-lg w-2/5"
                    >
                        <span className="text-xl">{loc.name}</span>
                        <div className="flex flex-col gap-2 text-lg pl-4">
                            <span>{loc.location}</span>
                            <span>{loc.cost}</span>
                            <span>{loc.phone}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen w-screen justify-center items-center gap-10 mt-6">
            <span className="text-3xl rounded-2xl border-2 border-blue-100 px-4 py-2 bg-white">
                Picking Restaurants
            </span>
            <ActivitySwipe
                name={currentLocation.name}
                description={currentLocation.description}
                picture={currentLocation.picture}
                rating={currentLocation.rating}
                cost={currentLocation.cost}
                cuisine={currentLocation.cuisine}
                location={currentLocation.location}
                phone={currentLocation.phone}
                onThumbsUp={() => {
                    handleThumbsUp(currentLocation);
                    showNextPreview();
                }}
                onThumbsDown={() => {
                    showNextPreview();
                }}
            ></ActivitySwipe>
        </div>
    );
};

export default Swipe;
