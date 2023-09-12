import React from 'react';

const CardTransaction = () => {
    return (
        <React.Fragment>
            <div className="overflow-x-auto overflow-y-scroll element-with-scrollbar mb-2" id="Transaction-details">
                <table className="items-center w-full border-collapse">
                    <thead className=''>
                        <tr className='bg-slate-300'>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                                }
                            >
                                Transaction
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
                                    "px-6 align-middle border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-center text-gray-900 font-bold border-gray-100"
                                }
                            >
                                Total Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-300">
                        <tr className='bg-white border-t'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h5 className='text-black'>Payment <span className="text-slate-500">(Paypal)</span></h5>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <span className='text-slate-500'>August 23, 2023</span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <span className='text-slate-500'>$2,555.00</span>
                            </td>
                        </tr>
                        <tr className='bg-white border-t'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h5 className='text-black'>Payment <span className="text-slate-500">(from account)</span></h5>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <span className='text-slate-500'>October 23, 2023</span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <span className='text-red-500'>$4,655.00</span>
                            </td>
                        </tr>
                        <tr className='bg-white border-t'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h5 className='text-black'>Payment <span className="text-slate-500">(Paypal)</span></h5>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <span className='text-slate-500'>August 23, 2023</span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <span className='text-slate-500'>$2,555.00</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default CardTransaction;