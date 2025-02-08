import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

import { ArrowBigLeft } from 'lucide-react';
import { ArrowBigRight } from 'lucide-react';

const Plan = () => {
    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

    const [selectedDining, setSelectedDining] = useState<string[]>([]);

    const handleActivityCheck = (checked: boolean, itemId: string) => {
        if (checked) {
            setSelectedActivities((prev) => [...prev, itemId]);
        } else {
            setSelectedActivities((prev) => prev.filter((id) => id !== itemId));
        }
    };

    const handleDiningCheck = (checked: boolean, itemId: string) => {
        if (checked) {
            setSelectedDining((prev) => [...prev, itemId]);
        } else {
            setSelectedDining((prev) => prev.filter((id) => id !== itemId));
        }
    };

    return (
        <div className="flex flex-col min-h-screen w-screen justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-6 bg-white border-blue-100 border-2 rounded-2xl p-4 shadow-lg">
                <span className="text-3xl">What would you like to do?</span>
            </div>

            <div className="flex flex-row gap-10">
                <div className="flex flex-col text-center gap-3 bg-white border-blue-100 border-2 rounded-2xl px-12 py-6 shadow-lg w-60">
                    <span className="text-2xl font-bold">Activities</span>
                    <div className="flex flex-col text-center gap-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="park"
                                checked={selectedActivities.includes('park')}
                                onCheckedChange={(checked) =>
                                    handleActivityCheck(
                                        checked as boolean,
                                        'park'
                                    )
                                }
                            />
                            <label
                                htmlFor="park"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                <span className="text-xl hover:cursor-pointer">
                                    Park
                                </span>
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="museum"
                                checked={selectedActivities.includes('museum')}
                                onCheckedChange={(checked) =>
                                    handleActivityCheck(
                                        checked as boolean,
                                        'museum'
                                    )
                                }
                            />
                            <label
                                htmlFor="museum"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                <span className="text-xl hover:cursor-pointer">
                                    Museum
                                </span>
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="karaoke"
                                checked={selectedActivities.includes('karaoke')}
                                onCheckedChange={(checked) =>
                                    handleActivityCheck(
                                        checked as boolean,
                                        'karaoke'
                                    )
                                }
                            />
                            <label
                                htmlFor="karaoke"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                <span className="text-xl hover:cursor-pointer">
                                    Karaoke
                                </span>
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="thrifting"
                                checked={selectedActivities.includes(
                                    'thrifting'
                                )}
                                onCheckedChange={(checked) =>
                                    handleActivityCheck(
                                        checked as boolean,
                                        'thrifting'
                                    )
                                }
                            />
                            <label
                                htmlFor="thrifting"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                <span className="text-xl hover:cursor-pointer">
                                    Thrifting
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-center gap-3 bg-white border-blue-100 border-2 rounded-2xl px-12 py-6 shadow-lg w-60">
                    <span className="text-2xl">Dining</span>
                    <div className="flex flex-col text-center gap-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="breakfast"
                                checked={selectedDining.includes('breakfast')}
                                onCheckedChange={(checked) =>
                                    handleDiningCheck(
                                        checked as boolean,
                                        'breakfast'
                                    )
                                }
                            />
                            <label
                                htmlFor="breakfast"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                <span className="text-xl hover:cursor-pointer">
                                    Breakfast
                                </span>
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="lunch"
                                checked={selectedDining.includes('lunch')}
                                onCheckedChange={(checked) =>
                                    handleDiningCheck(
                                        checked as boolean,
                                        'lunch'
                                    )
                                }
                            />
                            <label
                                htmlFor="lunch"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                <span className="text-xl hover:cursor-pointer">
                                    Lunch
                                </span>
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="dinner"
                                checked={selectedDining.includes('dinner')}
                                onCheckedChange={(checked) =>
                                    handleDiningCheck(
                                        checked as boolean,
                                        'dinner'
                                    )
                                }
                            />
                            <label
                                htmlFor="dinner"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                <span className="text-xl hover:cursor-pointer">
                                    Dinner
                                </span>
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="dessert"
                                checked={selectedDining.includes('dessert')}
                                onCheckedChange={(checked) =>
                                    handleDiningCheck(
                                        checked as boolean,
                                        'dessert'
                                    )
                                }
                            />
                            <label
                                htmlFor="dessert"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                <span className="text-xl hover:cursor-pointer">
                                    Dessert
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4">
                <Link to="/">
                    <Button variant="outline">
                        <ArrowBigLeft />
                        Back
                    </Button>
                </Link>
                <Link
                    to={{ pathname: 'preferences' }}
                    state={{ selectedActivities, selectedDining }}
                >
                    <Button variant="outline">
                        Next
                        <ArrowBigRight />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Plan;
