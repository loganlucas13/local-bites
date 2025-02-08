import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

import { ArrowBigLeft } from 'lucide-react';
import { ArrowBigRight } from 'lucide-react';

const Plan = () => {
    const [selectedDining, setSelectedDining] = useState<string[]>([]);

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
                    <Button variant="back" size="lg">
                        <ArrowBigLeft />
                        Back
                    </Button>
                </Link>
                <Link
                    to={{ pathname: 'preferences' }}
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

export default Plan;
