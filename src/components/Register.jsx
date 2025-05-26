import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { data } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {

    const { createUser } = use(AuthContext)
    // console.log(createUser);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries());

        


        
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                const userInformation ={
                    email,
                    ...rest,
                    creationTime : user.metadata.creationTime,
                    lastSignInTime : user.metadata.lastSignInTime
                }


                // save the user info in the database
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInformation)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Profile Created Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
            });


    }

    return (

        <div className="card bg-[#F4F3F0] lg:mt-30 mx-auto max-w-md shrink-0 shadow-xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Address</label>
                    <input type="text" name='address' className="input" placeholder="Address" />
                    <label className="label">Phone</label>
                    <input type="text" name='phone' className="input" placeholder="Phone" />
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input" placeholder="Photo URL" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn w-fit mx-auto btn-neutral mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;