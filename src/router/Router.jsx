import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Orders from "../pages/order/order";
import OrderDetails from "../pages/order/orderDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/orders",
                element: <Orders />,
                children: [],
            },
            {
                path: "/orderDetails",
                element: <OrderDetails />,
                children: [],
            },
        ],
    },
    // {
    //     path: "/orders",
    //     element: <Orders />,
    //     children: [],
    // },
    // {
    //     path: "/orderDetails",
    //     element: <OrderDetails />,
    //     children: [],
    // },
]);
