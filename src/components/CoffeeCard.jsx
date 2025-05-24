import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, setCoffeeData, coffeeData }) => {
    // console.log(coffee);
    const { photo, price, name, chef, supplier, _id, details } = coffee;


    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            const remainingCoffee = coffeeData.filter(cof => cof._id !== id);
                            setCoffeeData(remainingCoffee); 
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-[#F5F4F1] shadow-sm pb-5">
            <figure>
                <img
                    className='w-30 h-35 object-contain'
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="w-full flex justify-around mt-10">
                <div>
                    <h2 className="mb-2"><span className='font-bold'>Name: </span>{name}</h2>
                    <p className='mb-2'>
                        <span className='font-bold'>Chef: </span>
                        {chef}
                    </p>
                    <p>
                        <span className='font-bold'>Price: </span>
                        {price} Taka
                    </p>
                </div>
                <div className="card-actions ">
                    <div className="join join-vertical space-y-2">
                        <Link to={`/coffee/${_id}`}>
                            <button className="btn join-item">View</button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;