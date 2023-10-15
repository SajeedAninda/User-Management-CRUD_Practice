import React, { useEffect, useState } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Homepage = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])


    return (
        <div className='w-[70%] mx-auto py-10 flex flex-col gap-3'>
            <Link to={"/newUser"}>
                <button className='shadow-lg flex items-center gap-2 text-lg text-purple-700 px-3 py-2 w-[15%] rounded-lg border border-purple-500'>
                    New User
                    <BsFillPersonFill></BsFillPersonFill>
                </button>
            </Link>
            <div className='w-full'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-gray-900 text-white'>
                            <tr className=''>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            users.map((user, idx) => <tbody>
                                <tr>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.status}</td>
                                    <td className='space-x-2'>
                                    <button className="btn btn-active btn-primary">Update</button>
                                        <button className="btn btn-error">Delete</button>
                                    </td>
                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>

    );
};

export default Homepage;