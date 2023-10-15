import React, { useState } from 'react';

const CreateUser = () => {
    let [genderValue, setGenderValue] = useState("");
    let [statusValue, setStatusValue] = useState("");
    let handleCreate = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let gender = genderValue;
        let status = statusValue;
        console.log(name, email, gender, status);
    }

    return (
        <div>
            <div className='w-[70%] h-fit flex-col justify-center items-center mx-auto'>
                <div className='flex flex-col justify-center items-center space-y-2'>
                    <h1 className='text-2xl text-gray-800 font-bold'>New User</h1>
                    <p className='text-gray-400'>Use the form Below to create a new user</p>
                </div>
            </div>

            <div className='py-6 w-[60%] mx-auto'>
                <form onSubmit={handleCreate}>
                    <div className='space-y-2'>
                        <label className='text-gray-500 text-lg' htmlFor="name">Name</label> <br />
                        <input className='w-full py-1 rounded-md border border-gray-300' type="text" name='name' required />
                    </div>

                    <div className='space-y-2 mt-3'>
                        <label className='text-gray-500 text-lg' htmlFor="email">Email</label> <br />
                        <input className='w-full py-1 rounded-md border border-gray-300' type="email" name='email' required />
                    </div>

                    <div className='pt-3 space-x-3 flex items-center text-lg'>
                        <h3 className='text-lg text-gray-500'>Gender:</h3>
                        <label className='flex gap-2'>
                            <input
                                type="radio"
                                name='gender'
                                value="Male"
                                checked={genderValue === 'Male'}
                                onChange={() => setGenderValue('Male')}
                            />
                            Male
                        </label>

                        <label className='flex gap-2'>
                            <input
                                type="radio"
                                name='gender'
                                value="Female"
                                checked={genderValue === 'Female'}
                                onChange={() => setGenderValue('Female')}
                            />
                            Female
                        </label>
                    </div>

                    <div className='pt-3 space-x-3 flex items-center text-lg'>
                        <h3 className='text-lg text-gray-500'>Status:</h3>
                        <label className='flex gap-2'>
                            <input
                                type="radio"
                                name='status'
                                value="active"
                                checked={statusValue === 'Active'}
                                onChange={() => setStatusValue('Active')}
                            />
                            Active
                        </label>

                        <label className='flex gap-2'>
                            <input
                                type="radio"
                                name='status'
                                value="inactive"
                                checked={statusValue === 'Inactive'}
                                onChange={() => setStatusValue('Inactive')}
                            />
                            Inactive
                        </label>
                    </div>
                    <button className='bg-emerald-500 px-4 py-2 rounded-lg mt-3' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
