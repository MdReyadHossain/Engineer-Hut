import React from 'react';

const CardBalance = () => {
    return (
        <React.Fragment>
            <div className="overflow-x-auto overflow-y-scroll element-with-scrollbar" id="Transaction-details">
                <table className="items-center w-full border-collapse">
                    <thead className=''>
                        <tr className='bg-slate-300'>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                                }
                            >
                                Balance
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
                                <h5 className='text-black'>Order Total</h5>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <span className='text-slate-500'>$12,555.00</span>
                            </td>
                        </tr>
                        <tr className='bg-white border-t'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h5 className='text-black'>Return Total</h5>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <span className='text-slate-500'>$0.00</span>
                            </td>
                        </tr>
                        <tr className='bg-white border-t'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h5 className='text-black'>Paid By Customer</h5>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <span className='text-red-500'>$-100.00</span>
                            </td>
                        </tr>
                        <tr className='bg-white border-t'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h5 className='text-black'>Refunded</h5>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <span className='text-slate-500'>$0.00</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default CardBalance;