import React from 'react';
import { AiFillPhone, AiFillSkype } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { HiMailOpen } from "react-icons/hi";

const CardBilling = () => {
    return (
        <React.Fragment>
            <div className="my-4 w-full lg:w-1/3 overflow-x-auto overflow-y-scroll" id="product-details">
                <table className="items-center w-full border-collapse h-full">
                    <thead className=''>
                        <tr className='bg-slate-300'>
                            <th
                                colSpan={2}
                                className={
                                    "px-6 align-middle border border-solid py-5 text-sm uppercase border-l-0 border-r-0 text-left text-gray-900 font-bold border-gray-100"
                                }
                            >
                                Billing Address
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-300">
                        <tr className='bg-slate-50'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md p-4 space-y-2">
                                <p className="text-slate-500"><span className='inline-block text-indigo-500'><AiFillPhone /></span> +880 1957755775</p>
                                <p className="text-slate-500"><span className='inline-block text-indigo-500'><ImLocation /></span> Block-C, Bashundhara R/A, Dhaka-1229, Bangladesh</p>
                                <p className="text-slate-500"><span className='inline-block text-indigo-500'><HiMailOpen /></span> alexsmith@gmail.com</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default CardBilling;