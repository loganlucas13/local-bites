import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../ui/button';
import ActivitySwipe from '../ui/ActivitySwipe';

// TODO: get data from API and dynamically display activityswipe components

const Swipe = () => {
    return (
        <div className="flex flex-col min-h-screen w-screen justify-center items-center gap-10 mt-6">
            <span className="text-3xl rounded-2xl border-2 border-blue-100 px-4 py-2 bg-white">
                Picking Restaurants
            </span>
            <ActivitySwipe
                name="Monteverde"
                description="Stylish spot serving refined, contemporary Italian fare such as fresh pastas, plus global wines."
                picture="https://lh5.googleusercontent.com/p/AF1QipMVOrUckJnQu7C2jkBwjaSd7PPbQaFlqyQgWhSH=w408-h255-k-no"
                rating="4.7"
                cost="$$$"
                cuisine="Italian"
                location="1020 W Madison St."
                phone="123-456-7890"
            ></ActivitySwipe>
        </div>
    );
};

export default Swipe;
