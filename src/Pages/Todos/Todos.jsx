import axios from 'axios';
import React, { useEffect, useState } from 'react';
import usetitle from '../../Hooktitle/usetitle';

const Todos = () => {
    usetitle('Todo')
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                setdata(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <div className=' container mx-auto'>



            <div>
                <div class="p-5  ">


                    <div class="overflow-auto rounded-lg shadow hidden md:block">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    data.map(data =>
                                        <tr>
                                            <th>{data.id}</th>
                                            <td>{data.title}</td>
                                            <td>
                                                {
                                                    data.completed == true ?
                                                        <button className=' text-white bg-[#FD9C06] py-2 px-6 '>Done</button> :
                                                        <button className='text-white bg-red-700  py-2 px-4 '>
                                                            Panding</button>
                                                }
                                            </td>

                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                        {
                            data.map(data =>

                                <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                                    <div class="flex items-center justify-between space-x-2 text-sm">

                                        <div class="text-gray-500">{data.id}</div>
                                        <div>
                                            {
                                                data.completed == true ?
                                                    <button className=' text-white bg-[#FD9C06] py-2 px-6 '>Done</button> :
                                                    <button className='text-white bg-red-700  py-2 px-4 '>
                                                        Panding</button>
                                            }
                                        </div>
                                    </div>
                                    <div class="text-sm text-gray-700">
                                        {
                                            data.title
                                        }
                                    </div>

                                </div>

                            )
                        }

                    </div>

                </div>
            </div>
        </div>




    );
};

export default Todos;

/*<div class="bg-white space-y-3 p-4 rounded-lg shadow">
                            <div class="flex items-center space-x-2 text-sm">
                                <div>
                                    <a href="#" class="text-blue-500 font-bold hover:underline">#1000</a>
                                </div>
                                <div class="text-gray-500">10/10/2021</div>
                                <div>
                                    <span
                                        class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700">
                                Kring New Fit office chair, mesh + PU, black
                            </div>
                            <div class="text-sm font-medium text-black">
                                $200.00
                            </div>
                        </div>*/

