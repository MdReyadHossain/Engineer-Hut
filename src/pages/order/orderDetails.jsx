import React from "react";
import HeadingOrder from "../../components/order/header/heading";
import CardProductPrice from "../../components/order/orderDetails/cardProductPrice";
import CardTransaction from "../../components/order/orderDetails/cardTansaction";
import CardBalance from "../../components/order/orderDetails/cardBalance";
import CardContact from "../../components/order/orderDetails/customer/CardContact";
import CardShipping from "../../components/order/orderDetails/customer/cardShipping";
import CardBilling from "../../components/order/orderDetails/customer/cardBilling";

const OrderDetails = () => {
    return (
        <React.Fragment>
            <div className='container mx-auto p-3'>
                <HeadingOrder />
                <div className='container p-5 bg-gray-100'>
                    <div className="flex justify-between items-center flex-wrap p-5 bg-white mr-1">
                        <div className="">
                            <h2 className="font-bold">Items from Oreder #kw12312</h2>
                        </div>

                        <div className="space-y-2">
                            <span className="text-slate-500 mr-2">August 23, 2023 at 4:14 pm / 3 items / Total $1012</span>
                            <div className="lg:inline-block">
                                <button className='px-4 py-1 rounded-md bg-red-200 text-red-500'>Paid</button>
                                <button className='px-4 py-1 mx-1 rounded-md bg-green-200 text-green-600'>Partially Fulfilled</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between lg:flex-row">
                        <CardProductPrice />
                        <div className="my-4 w-full lg:w-1/2">
                            <CardTransaction />
                            <CardBalance />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between lg:flex-row">
                    {/* Customer Contact */}
                    <CardContact />
                    {/* Shipping Address */}
                    <CardShipping />
                    {/* Billing Address */}
                    <CardBilling />
                </div>
            </div>
        </React.Fragment>
    );
}

export default OrderDetails;