import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeDetails = () => {
    const { photo, price, taste, name, chef, supplier, _id, details } = useLoaderData();


    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        // console.log(updatedCoffee);

        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Coffee Updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <div className='bg-[#F4F3F0] py-16'>
                <div className='text-center mb-10'>
                    <h3 className='mb-6 text-5xl font-bold px-4 md:px-0 '> Update Coffee</h3>
                </div>
                <div className='px-4 md:px-14'>
                    <form onSubmit={handleUpdateCoffee}>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Name</label>
                                <input type="text" defaultValue={name} name='name' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee name" />
                            </fieldset>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Chef</label>
                                <input type="text" defaultValue={chef} name='chef' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee Chef" />
                            </fieldset>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Supplier</label>
                                <input type="text" defaultValue={supplier} name='supplier' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee Supplier" />
                            </fieldset>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Taste</label>
                                <input type="text" defaultValue={taste} name='taste' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee Taste" />
                            </fieldset>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Price</label>
                                <input type="text" defaultValue={price} name='Price' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee Price" />
                            </fieldset>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Details</label>
                                <input type="text" defaultValue={details} name='details' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee Details" />
                            </fieldset>
                        </div>
                        <div className='w-full mb-5'>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Photo URL</label>
                                <input type="text"
                                    defaultValue={photo}
                                    name='photo' className="input w-full rounded-lg py-8" placeholder="Enetr Photo URL" />
                            </fieldset>
                        </div>
                        <input className='border-2 bg-[#D2B48C] text-[#331A15] cursor-pointer border-[#331A15] w-full py-3 text-xl font-bold' type="submit" value="Update Coffee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;