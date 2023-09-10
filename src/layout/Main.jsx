import Sidebar from "../components/dashboard/sidebar/Sidebar";
import Orders from "../components/orders/order";
import OrderDetails from "../components/orders/orderDetails";

const Main = () => {
    return (
        <>
            <div>
                <Sidebar />
                <Orders />
                <OrderDetails />
            </div>
        </>
    );
};

export default Main;
