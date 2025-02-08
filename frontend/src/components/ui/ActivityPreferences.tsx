import React from 'react';

import { capitalize } from '../../assets/utils/capitalize';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type ActivityProps = {
    activityType: string;
    index: number;
};

const Activity: React.FC<ActivityProps> = ({ activityType, index }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 bg-white border-blue-100 border-2 rounded-2xl p-4 shadow-lg w-64">
            <span className="pt-3 text-2xl">{capitalize(activityType)}</span>
            <div className="flex flex-col w-4/5 gap-4">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Cuisine"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="no-preference">
                            No Preference
                        </SelectItem>
                        <SelectItem value="american">American</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="italian">Italian</SelectItem>
                        <SelectItem value="mexican">Mexican</SelectItem>
                        <SelectItem value="japanese">Japanese</SelectItem>
                        <SelectItem value="chinese">Chinese</SelectItem>
                        <SelectItem value="indian">Indian</SelectItem>
                        <SelectItem value="mediterranean">
                            Mediterranean
                        </SelectItem>
                        <SelectItem value="middle-eastern">
                            Middle Eastern
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Dietary Restrictions"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="no-preference">
                            No Preference
                        </SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="low-carb">Low Carb</SelectItem>
                        <SelectItem value="gluten-free">Gluten Free</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Dining Style"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="no-preference">
                            No Preference
                        </SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="fast-food">Fast Food</SelectItem>
                        <SelectItem value="street-food">Street Food</SelectItem>
                        <SelectItem value="cafe-bakery">Cafe/Bakery</SelectItem>
                    </SelectContent>
                </Select>
                <div className="pt-3">
                    <RadioGroup defaultValue="any">
                        {['any', 'cheap', 'medium', 'expensive'].map(
                            (value) => {
                                const uniqueId = `${value}-${index}`;
                                return (
                                    <div
                                        key={uniqueId}
                                        className="flex items-center space-x-2"
                                    >
                                        <RadioGroupItem
                                            value={value}
                                            id={uniqueId}
                                        />
                                        <label
                                            className="hover:cursor-pointer"
                                            htmlFor={uniqueId}
                                        >
                                            {value === 'cheap'
                                                ? '$'
                                                : value === 'medium'
                                                ? '$$'
                                                : value === 'expensive'
                                                ? '$$$'
                                                : 'Any Price'}
                                        </label>
                                    </div>
                                );
                            }
                        )}
                    </RadioGroup>
                </div>
            </div>
        </div>
    );
};

export default Activity;
