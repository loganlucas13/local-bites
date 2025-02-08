import React from 'react';

type DiningProps = {
    diningType: string;
};

const Dining: React.FC<DiningProps> = ({ diningType }) => {
    return (
        <div>
            <span>{diningType}</span>
        </div>
    );
};

export default Dining;
