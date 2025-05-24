import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffeeData = useLoaderData();
    console.log(coffeeData);
    return (
        <div>
            <h4>Details here</h4>
        </div>
    );
};

export default CoffeeDetails;