import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Homepage = () => {



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
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default Homepage;