import React from 'react';
import customer from "../../../../assets/img/user/customer.jpg";
import { AiFillPhone, AiFillSkype } from "react-icons/ai";
import { HiMailOpen } from "react-icons/hi";

const CardContact = () => {
    return (
        <React.Fragment>
            <div className="my-4 w-full lg:w-1/3 overflow-x-auto overflow-y-scroll element-with-scrollbar" id="product-details">
                <table className="items-center w-full border-collapse h-full">
                    <thead className=''>
                        <tr className='bg-slate-300'>
                            <th
                                colSpan={2}
                                className={
                                    "px-6 align-middle border border-solid py-5 text-xs lg:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                                }
                            >
                                Customer Contact
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-300">
                        <tr className='bg-slate-50'>
                            <td rowSpan={2} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <img src={customer} alt="product" style={{ height: "auto", width: "auto", maxHeight: "155px", borderRadius: "50%" }} />
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h5 className='font-bold text-sm lg:text-lg'>Alex Smith</h5>
                            </td>
                        </tr>
                        <tr className='bg-slate-50'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 space-y-2">
                                <p className="text-slate-500 text-xs lg:text-sm"><span className='inline-block text-indigo-500'><AiFillPhone /></span> +880 1957755775</p>
                                <p className="text-slate-500 text-xs lg:text-sm"><span className='inline-block text-indigo-500'><AiFillSkype /></span> Alex (Skype)</p>
                                <p className="text-slate-500 text-xs lg:text-sm"><span className='inline-block text-indigo-500'><HiMailOpen /></span> alexsmith@gmail.com</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default CardContact;