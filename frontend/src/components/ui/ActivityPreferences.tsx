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
};

const Activity: React.FC<ActivityProps> = ({ activityType }) => {
    const renderOptions = () => {
        switch (activityType) {
            case 'park':
                return (
                    <div className="w-3/4">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Park Size"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="small">Small</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="large">Large</SelectItem>
                                <SelectItem value="no-preference">
                                    No Preference
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="pt-3">
                            <RadioGroup defaultValue="any">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="any"
                                        id="park-any"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="park-any"
                                    >
                                        Any
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="cheap"
                                        id="park-cheap"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="park-cheap"
                                    >
                                        $
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="medium"
                                        id="park-medium"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="park-medium"
                                    >
                                        $$
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="expensive"
                                        id="park-expensive"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="park-expensive"
                                    >
                                        $$$
                                    </label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                );
            case 'museum':
                return (
                    <div className="w-3/4">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Museum Type"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="art">Art</SelectItem>
                                <SelectItem value="history">History</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="technology">
                                    Technology
                                </SelectItem>
                                <SelectItem value="no-preference">
                                    No Preference
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="pt-3">
                            <RadioGroup defaultValue="any">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="any"
                                        id="museum-any"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="museum-any"
                                    >
                                        Any
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="cheap"
                                        id="museum-cheap"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="museum-cheap"
                                    >
                                        $
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="medium"
                                        id="museum-medium"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="museum-medium"
                                    >
                                        $$
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="expensive"
                                        id="museum-expensive"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="museum-expensive"
                                    >
                                        $$$
                                    </label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                );
            case 'karaoke':
                return (
                    <div className="w-3/4">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Room Preference"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="private-room">
                                    Private Room
                                </SelectItem>
                                <SelectItem value="open-mic">
                                    Open Mic
                                </SelectItem>
                                <SelectItem value="no-preference">
                                    No Preference
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="pt-3">
                            <RadioGroup defaultValue="any">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="any"
                                        id="karaoke-any"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="karaoke-any"
                                    >
                                        Any
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="cheap"
                                        id="karaoke-cheap"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="karaoke-cheap"
                                    >
                                        $
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="medium"
                                        id="karaoke-medium"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="karaoke-medium"
                                    >
                                        $$
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="expensive"
                                        id="karaoke-expensive"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="karaoke-expensive"
                                    >
                                        $$$
                                    </label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                );
            case 'thrifting':
                return (
                    <div className="w-3/4">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Type of Stock"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="clothing">
                                    Clothing
                                </SelectItem>
                                <SelectItem value="antiques">
                                    Antiques
                                </SelectItem>
                                <SelectItem value="furniture">
                                    Furniture
                                </SelectItem>
                                <SelectItem value="no-preference">
                                    No Preference
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="pt-3">
                            <RadioGroup defaultValue="any">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="any"
                                        id="thrift-any"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="thrift-any"
                                    >
                                        Any
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="cheap"
                                        id="thrift-cheap"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="thrift-cheap"
                                    >
                                        $
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="medium"
                                        id="thrift-medium"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="thrift-medium"
                                    >
                                        $$
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="expensive"
                                        id="thrift-expensive"
                                    ></RadioGroupItem>
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="thrift-expensive"
                                    >
                                        $$$
                                    </label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                );
            default: // error
                return <div></div>;
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-6 bg-white border-blue-100 border-2 rounded-2xl p-4 shadow-lg w-64">
            <span className="pt-3 text-2xl">{capitalize(activityType)}</span>
            {renderOptions()}
        </div>
    );
};

export default Activity;
