import React from 'react';

import { Button } from './button';

import { ThumbsDown, ThumbsUp, Star, Gem, MapIcon, Phone } from 'lucide-react';

type ActivitySwipeProps = {
    displayName: string;
    editorialSummary: string;
    photos: string;
    rating: string;
    priceLevel: string;
    formattedAddress: string;
    nationalPhoneNumber: string;
    onThumbsUp: () => void;
    onThumbsDown: () => void;
};

const ActivitySwipe = (props: ActivitySwipeProps) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 bg-white border-blue-100 border-2 rounded-2xl p-4 shadow-lg w-2/5 mb-6">
            <div className="flex flex-col items-center gap-2">
                <img
                    className="rounded-3xl border-4 border-blue-100"
                    src={props.photos}
                ></img>
                <span className="text-2xl border-2 border-blue-100 rounded-3xl px-4 py-1">
                    {props.displayName}
                </span>
            </div>

            <div className="flex flex-row justify-between w-3/5 text-3xl">
                <Button
                    variant="thumbdown"
                    size="icon"
                    onClick={props.onThumbsDown}
                >
                    <ThumbsDown />
                </Button>
                <Button
                    variant="thumbup"
                    size="icon"
                    onClick={props.onThumbsUp}
                >
                    <ThumbsUp />
                </Button>
            </div>

            <div className="justify-self-start items-center">
                <span className="flex flex-row gap-1 items-center">
                    Rating: {props.rating} <Star />
                </span>
            </div>
            <div className="flex flex-col w-4/5 border-2 border-blue-100 rounded-3xl px-8 py-4">
                <span className="text-xl underline">Description</span>
                <span className="pl-4">{props.editorialSummary}</span>
            </div>

            <div className="flex flex-col gap-2 w-full justify-center items-center">
                <span className="flex flex-row items-center gap-1">
                    <Gem />
                    {props.priceLevel === 'PRICE_LEVEL_INEXPENSIVE' ? (
                        <span>$</span>
                    ) : props.priceLevel === 'PRICE_LEVEL_MODERATE' ? (
                        <span>$$</span>
                    ) : props.priceLevel === 'PRICE_LEVEL_EXPENSIVE' ? (
                        <span>$$$</span>
                    ) : props.priceLevel === 'PRICE_LEVEL_VERY_EXPENSIVE' ? (
                        <span>$$$</span>
                    ) : null}
                </span>
                <span className="flex flex-row items-center gap-1">
                    <MapIcon />
                    {props.formattedAddress}
                </span>
                <span className="flex flex-row items-center gap-1">
                    <Phone />
                    {props.nationalPhoneNumber}
                </span>
            </div>
        </div>
    );
};

export default ActivitySwipe;
