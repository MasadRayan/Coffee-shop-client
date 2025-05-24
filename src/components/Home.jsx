import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffeeData = useLoaderData();
    // console.log(coffeeData);
    const [coffeeData, setCoffeeData] = useState(initialCoffeeData);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    coffeeData.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffeeData={coffeeData}
                        setCoffeeData= {setCoffeeData}
                        coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;