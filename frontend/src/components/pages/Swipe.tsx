import React, { useState, useEffect } from 'react';
import ActivitySwipe from '../ui/ActivitySwipe';

type location = {
    displayName: string;
    editorialSummary: string;
    photos: string;
    rating: string;
    priceLevel: string;
    formattedAddress: string;
    nationalPhoneNumber: string;
};

const Swipe = () => {
    const fetchResponse = async (query: string): Promise<location[]> => {
        const response = await fetch(
            `http://localhost:8000/api/search/?=${query}`
        );
        const data = await response.json();
        return data as location[];
    };

    const [locations, setLocations] = useState<location[]>([]);

    useEffect(() => {
        const loadLocations = async () => {
            const fetchedLocations = await fetchResponse('italian lunch');
            setLocations(fetchedLocations);
        };

        loadLocations();
    }, []);

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
                        <span className="text-xl">{loc.displayName}</span>
                        <div className="flex flex-col gap-2 text-lg pl-4">
                            <span>{loc.formattedAddress}</span>
                            <span>{loc.priceLevel}</span>
                            <span>{loc.nationalPhoneNumber}</span>
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
                displayName={currentLocation.displayName}
                editorialSummary={currentLocation.editorialSummary}
                photos={currentLocation.photos}
                rating={currentLocation.rating}
                priceLevel={currentLocation.priceLevel}
                formattedAddress={currentLocation.formattedAddress}
                nationalPhoneNumber={currentLocation.nationalPhoneNumber}
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
