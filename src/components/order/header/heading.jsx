import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HeadingOrder = () => {
    const [url, setUrl] = useState('');
    const heading = [
        {
            title: "Order List",
            link: "/orders"
        },
        {
            title: "Order Details",
            link: "/orderDetails"
        }
    ]

    heading.map((head) => {
        location.pathname == head.link ?
            useEffect(() => {
                setUrl(head.title);
            }) : ""
    })

    return (
        <React.Fragment>
            <div>
                <h3 className='text-3xl'>{url}</h3>
                <h5 className='mb-4'>Home / <span className='text-cyan-500 hover:text-blue-500 cursor-pointer'>{url}</span></h5>
            </div>
        </React.Fragment>
    );
}

export default HeadingOrder;