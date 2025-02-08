import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../ui/button';
import { NotebookPen } from 'lucide-react';
import { Pizza } from 'lucide-react';

function Startup() {
    return (
        <div className="flex flex-col min-h-screen w-screen justify-center items-center gap-10">
            <div className="bg-white border-blue-100 border-2 rounded-2xl p-4 shadow-lg">
                <span className="flex flex-row gap-2 items-center text-4xl">
                    <Pizza />
                    LocalBites
                </span>
            </div>

            <div className="flex flex-col justify-center items-center gap-6 bg-white border-blue-100 border-2 rounded-2xl p-4 shadow-lg">
                <span className="text-2xl">
                    Find curated options for dining at small businesses nearby!
                </span>
                <Link to="/plan">
                    <Button variant="next" size="lg">
                        <NotebookPen />
                        <span>Start your planning!</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Startup;
