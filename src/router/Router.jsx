import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Orders from "../components/orders/order";
import OrderDetails from "../components/orders/orderDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [],
    },
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
]);
