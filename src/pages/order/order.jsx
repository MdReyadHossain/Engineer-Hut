import React from 'react';
import HeadingOrder from '../../components/order/header/heading';
import CardOrderList from '../../components/order/orderList/CardOrderList';
import CardPagination from '../../components/order/orderList/CardPagination';

const Orders = () => {
    return (
        <React.Fragment>
            <div className='container mx-auto p-3'>
                <HeadingOrder />
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

                    {/* table of orders */}
                    <CardOrderList />

                    {/* pagination */}
                    <CardPagination />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Orders;
