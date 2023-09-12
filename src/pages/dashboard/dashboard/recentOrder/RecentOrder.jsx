import person1 from "../../../../assets/img/avater.png";
import img1 from "../../../../assets/img/products/4.png";
import img2 from "../../../../assets/img/products/5.png";
import img3 from "../../../../assets/img/products/6.png";
import person2 from "../../../../assets/img/user/1.jpg";
import person3 from "../../../../assets/img/user/2.jpg";
import RecentOrderRow from "./RecentOrderRow";

// dummy data
const orders = [
  {
    id: 1,
    orderId: "1a",
    customer: {
      name: "John Doe",
      img: person1, // Placeholder image
    },
    product: {
      name: "Product A",
      img: img1, // Placeholder image
    },
    price: 49.99,
    vendor: "Vendor X",
    status: "pending",
  },
  {
    id: 2,
    orderId: "2b",
    customer: {
      name: "Alice Smith",
      img: person2, // Placeholder image
    },
    product: {
      name: "Product B",
      img: img2, // Placeholder image
    },
    price: 29.99,
    vendor: "Vendor Y",
    status: "completed",
  },
  {
    id: 3,
    orderId: "3c",
    customer: {
      name: "Bob Johnson",
      img: person3, // Placeholder image
    },
    product: {
      name: "Product C",
      img: img3, // Placeholder image
    },
    price: 99.99,
    vendor: "Vendor Z",
    status: "delivered",
  },
  // Add more orders as needed...
];

const RecentOrder = () => {
  return (
    // <!-- component -->
    <div className="pt-8">
      <p className="capitalize md:text-lg text-slate-700 font-semibold">
        Recents orders
      </p>
      <div className="overflow-x-auto element-with-scrollbar">
        <div className="min-w-screen  flex items-center justify-center bg-gray-100 font-sans ">
          <div className="w-full">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Order Id</th>
                    <th className="py-3 px-6 text-left">Coustomer</th>
                    <th className="py-3 px-6 text-center">Product</th>
                    <th className="py-3 px-6 text-center">Amount</th>
                    <th className="py-3 px-6 text-center">Vendor</th>
                    <th className="py-3 px-6 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {orders?.map((order, index) => {
                    return index % 2 === 0 ? (
                      <RecentOrderRow
                        key={order.id}
                        order={order}
                        styles={"bg-gray-50"}
                      />
                    ) : (
                      <RecentOrderRow key={order.id} order={order} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
