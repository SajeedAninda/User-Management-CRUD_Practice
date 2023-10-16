import React, { useEffect, useState } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Homepage = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://user-management-server-sajeed-enayet-anindas-projects.vercel.app/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    let handleDelete = (id) => {
        console.log(id);
        fetch(`https://user-management-server-sajeed-enayet-anindas-projects.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("User Deleted");
                    let remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            });
    }


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
                            users.map((user, idx) => <tbody key={user._id}>
                                <tr>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.status}</td>
                                    <td className='space-x-2'>
                                        <Link to={`/updateUsers/${user._id}`}><button className="btn btn-active btn-primary">Update</button></Link>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-error">Delete</button>
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