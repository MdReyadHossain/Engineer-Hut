import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const CardOrderList = () => {
    return (
        <React.Fragment>
            <div className="block w-full overflow-x-auto overflow-y-scroll element-with-scrollbar h-5/6">
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
                                <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <a href='/orderDetails' className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</a>
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
                                <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <a href='/orderDetails' className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</a>
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
                                <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <a href='/orderDetails' className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</a>
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
                                <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <a href='/orderDetails' className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</a>
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
                                <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <a href='/orderDetails' className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</a>
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
                                <input type="checkbox" name="" id="" className='w-3 h-3 ease-soft text-base' /> <a href='/orderDetails' className='text-indigo-600 cursor-pointer hover:text-indigo-400'>#kw12312</a>
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
        </React.Fragment>
    );
};

export default CardOrderList;