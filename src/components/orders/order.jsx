import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Orders = () => {
    return (
        <React.Fragment>
            <div className='container mx-auto py-3'>
                <h3 className='text-3xl'>Order List</h3>
                <h5 className='mb-4'>Home / <span className='text-cyan-500 hover:text-blue-500 cursor-pointer'>Order List</span></h5>
                <div className='container p-5 bg-gray-100'>
                    <div className='flex justify-between'>
                        {/* showing row of table */}
                        <div className=''>
                            <h5 className='mb-5'>Showing
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded ml-2 p-1">
                                    <option value="20" selected>20</option>
                                    <option value="10">10</option>
                                    <option value="5">5</option>
                                </select>
                            </h5>
                        </div>
                        {/* search bar */}
                        <div class="pt-2 relative text-gray-600 mr-1 mb-4">
                            <input class="border-2 border-gray-300 bg-white h-10 px-5 w-full rounded-sm text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto overflow-y-scroll h-5/6">
                        {/* Order table */}
                        <table className="items-center w-full border-collapse">
                            <thead className=''>
                                <tr className='bg-slate-300'>
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                                        }
                                    >
                                        Order ID
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                                        }
                                    >
                                        Customer Name
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                                        }
                                    >
                                        Date
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-top border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-center text-gray-900 font-bold border-gray-100"
                                        }
                                    >
                                        Payment Status
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-top border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-center text-gray-900 font-bold border-gray-100"
                                        }
                                    >
                                        Total
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-top border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-center text-gray-900 font-bold border-gray-100"
                                        }
                                    >
                                        Payment Method
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-top border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-center text-gray-900 font-bold border-gray-100"
                                        }
                                    >
                                        Order Status
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-top border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-center text-gray-900 font-bold border-gray-100"
                                        }
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-slate-300">
                                <tr className='even:bg-white odd:bg-slate-200'>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <span className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Alex Smith</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <p className='text-slate-500'>Aug 23, 2023 <span className='text-xs'>4:14</span></p>
                                        <span className='text-slate-500'>PM</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-red-200 text-red-500'>Paid</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>$1012</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Mastercard</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-green-200 text-green-600'>Shipped</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <button className='text-xl px-5 py-2 rounded-md bg-green-200 hover:bg-green-300 text-green-600'><AiOutlineEdit /></button> <button className='text-xl px-5 py-2 rounded-md bg-red-200 hover:bg-red-300 text-red-500'><AiOutlineDelete /></button>
                                    </td>
                                </tr>
                                <tr className='even:bg-white odd:bg-slate-200'>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <span className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Alex Smith</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <p className='text-slate-500'>Aug 23, 2023 <span className='text-xs'>4:14</span></p>
                                        <span className='text-slate-500'>PM</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-red-200 text-red-500'>Paid</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>$1012</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Mastercard</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-green-200 text-green-600'>Shipped</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <button className='text-xl px-5 py-2 rounded-md bg-green-200 hover:bg-green-300 text-green-600'><AiOutlineEdit /></button> <button className='text-xl px-5 py-2 rounded-md bg-red-200 hover:bg-red-300 text-red-500'><AiOutlineDelete /></button>
                                    </td>
                                </tr>
                                <tr className='even:bg-white odd:bg-slate-200'>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <span className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Alex Smith</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <p className='text-slate-500'>Aug 23, 2023 <span className='text-xs'>4:14</span></p>
                                        <span className='text-slate-500'>PM</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-red-200 text-red-500'>Paid</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>$1012</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Mastercard</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-green-200 text-green-600'>Shipped</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <button className='text-xl px-5 py-2 rounded-md bg-green-200 hover:bg-green-300 text-green-600'><AiOutlineEdit /></button> <button className='text-xl px-5 py-2 rounded-md bg-red-200 hover:bg-red-300 text-red-500'><AiOutlineDelete /></button>
                                    </td>
                                </tr>
                                <tr className='even:bg-white odd:bg-slate-200'>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <span className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Alex Smith</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <p className='text-slate-500'>Aug 23, 2023 <span className='text-xs'>4:14</span></p>
                                        <span className='text-slate-500'>PM</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-yellow-200 text-yellow-600'>Cash on Delivery</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>$1012</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Mastercard</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-red-200 text-red-500'>Processing</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <button className='text-xl px-5 py-2 rounded-md bg-green-200 hover:bg-green-300 text-green-600'><AiOutlineEdit /></button> <button className='text-xl px-5 py-2 rounded-md bg-red-200 hover:bg-red-300 text-red-500'><AiOutlineDelete /></button>
                                    </td>
                                </tr>
                                <tr className='even:bg-white odd:bg-slate-200'>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <span className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Alex Smith</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <p className='text-slate-500'>Aug 23, 2023 <span className='text-xs'>4:14</span></p>
                                        <span className='text-slate-500'>PM</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-yellow-200 text-yellow-600'>Cash on Delivery</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>$1012</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Mastercard</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-red-200 text-red-500'>Processing</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <button className='text-xl px-5 py-2 rounded-md bg-green-200 hover:bg-green-300 text-green-600'><AiOutlineEdit /></button> <button className='text-xl px-5 py-2 rounded-md bg-red-200 hover:bg-red-300 text-red-500'><AiOutlineDelete /></button>
                                    </td>
                                </tr>
                                <tr className='even:bg-white odd:bg-slate-200'>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <span className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Alex Smith</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                        <p className='text-slate-500'>Aug 23, 2023 <span className='text-xs'>4:14</span></p>
                                        <span className='text-slate-500'>PM</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-yellow-200 text-yellow-600'>Cash on Delivery</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>$1012</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='text-slate-500'>Mastercard</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <span className='px-5 py-2 rounded-md bg-red-200 text-red-500'>Processing</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                        <button className='text-xl px-5 py-2 rounded-md bg-green-200 hover:bg-green-300 text-green-600'><AiOutlineEdit /></button> <button className='text-xl px-5 py-2 rounded-md bg-red-200 hover:bg-red-300 text-red-500'><AiOutlineDelete /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-4 text-end mr-1'>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-sm px-2 py-2 text-gray-400 ring-1 ring-inset focus:z-20 focus:outline-offset-0 hover:bg-indigo-600 hover:text-white"
                            >
                                <IoIosArrowBack className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a
                                href="#"
                                aria-current="page"
                                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                1
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                2
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-sm px-2 py-2 text-gray-400 ring-1 ring-inset focus:z-20 focus:outline-offset-0 hover:bg-indigo-600 hover:text-white"
                            >
                                <IoIosArrowForward className="h-5 w-5" aria-hidden="true" />
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Orders;
