import React from 'react';
import product1 from "../../../assets/img/products/product-1.jpg";
import product2 from "../../../assets/img/products/product-2.jpg";

const CardProductPrice = () => {
    return (
        <React.Fragment>
            <div className="my-4 w-full lg:w-1/2 overflow-x-auto overflow-y-scroll element-with-scrollbar h-5/6" id="product-details">
                <table className="items-center w-full border-collapse">
                    <thead className=''>
                        <tr className='bg-slate-300'>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                                }
                            >
                                Product
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                                }
                            >
                                Porducts Name
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                                }
                            >
                                Price
                            </th>
                            <th
                                className={
                                    "px-6 align-top border border-solid py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-center text-gray-900 font-bold border-gray-100"
                                }
                            >
                                Total Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-300">
                        {/* list of products */}
                        <tr className='even:bg-white odd:bg-slate-200'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <img src={product1} alt="product" style={{ height: "45px", width: "45px", borderRadius: "10px" }} />
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h5 className='font-bold text-sm'>Python T-shirt</h5>
                                <h5 className='font-bold text-sm'>Male Dress</h5>
                                <span className='text-slate-500'>Color: black</span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <span className='text-slate-500'>$135 x 2</span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <span className='text-slate-500'>$270</span>
                            </td>
                        </tr>
                        <tr className='even:bg-white odd:bg-slate-200'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <img src={product2} alt="product" style={{ height: "45px", width: "45px", borderRadius: "10px" }} />
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h5 className='font-bold text-sm'>Github T-shirt</h5>
                                <h5 className='font-bold text-sm'>Male/Female Dress</h5>
                                <span className='text-slate-500'>Color: White</span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <span className='text-slate-500'>$150 x 2</span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <span className='text-slate-500'>$300</span>
                            </td>
                        </tr>
                        <tr className='even:bg-white odd:bg-slate-200'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <img src={product1} alt="product" style={{ height: "45px", width: "45px", borderRadius: "10px" }} />
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h5 className='font-bold text-sm'>Python T-shirt</h5>
                                <h5 className='font-bold text-sm'>Male Dress</h5>
                                <span className='text-slate-500'>Color: black</span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <span className='text-slate-500'>$135 x 2</span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <span className='text-slate-500'>$270</span>
                            </td>
                        </tr>
                        {/* Subtotal pricing */}
                        <tr className='bg-white border-t'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            </td>
                            <td colSpan={2} className="border-b px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h4 className="text-black text-base font-bold">Subtotal</h4>
                                <div className="text-slate-500">
                                    <p>Store Credit</p>
                                    <p>Delivery Charge</p>
                                    <p>Shipping</p>
                                    <p>Vat Tax</p>
                                </div>
                            </td>
                            <td className="border-b px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <h4 className='text-black text-base font-bold'>$570</h4>
                                <div className="text-slate-500">
                                    <p>$20</p>
                                    <p>$30</p>
                                    <p>$35</p>
                                    <p>$25</p>
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white'>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            </td>
                            <td colSpan={2} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <h4 className="text-black text-base font-bold">Total</h4>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                                <h4 className='text-black text-base font-bold'>$680</h4>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default CardProductPrice;