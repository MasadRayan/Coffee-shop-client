import React from 'react';

const AddCoffee = () => {


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/coffees', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log('After adding coffee to db' , data);
        })
    }


    return (
        <div>
            <div className='bg-[#F4F3F0] py-16'>
                <div className='text-center mb-10'>
                    <h3 className='mb-6 text-5xl font-bold px-4 md:px-0 '> Add New Coffee</h3>
                    <p className='text-[#1B1A1AB3] text-lg lg:max-w-[932px] mx-auto px-4 md:px-0 '>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <div className='px-4 md:px-14'>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Name</label>
                                <input type="text" name='name' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee name" />
                            </fieldset>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Chef</label>
                                <input type="text" name='chef' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee Chef" />
                            </fieldset>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Supplier</label>
                                <input type="text" name='supplier' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee Supplier" />
                            </fieldset>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Taste</label>
                                <input type="text" name='taste' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee Taste" />
                            </fieldset>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Category</label>
                                <input type="text" name='category' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee Category" />
                            </fieldset>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Details</label>
                                <input type="text" name='details' className="input w-full rounded-lg py-8" placeholder="Enetr Coffee Details" />
                            </fieldset>
                        </div>
                        <div className='w-full mb-5'>
                            <fieldset className="fieldset rounded-box  lg:p-4">
                                <label className="label text-lg font-medium text-black">Photo URL</label>
                                <input type="text" name='photo' className="input w-full rounded-lg py-8" placeholder="Enetr Photo URL" />
                            </fieldset>
                        </div>
                        <input className='border-2 bg-[#D2B48C] text-[#331A15] border-[#331A15] w-full py-3 text-xl font-bold' type="submit" value="Add Coffee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;