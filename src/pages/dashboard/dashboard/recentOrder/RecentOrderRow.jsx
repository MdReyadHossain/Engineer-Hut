const RecentOrderRow = ({ order, styles }) => {
  // status column
  let decide;
  if (order?.status === "pending") {
    decide = (
      <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
        {order.status}
      </span>
    );
  } else if (order?.status === "delivered") {
    decide = (
      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
        {order.status}
      </span>
    );
  } else {
    decide = (
      <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
        {order.status}
      </span>
    );
  }

  //component
  return (
    <tr
      className={`border-b border-gray-200 hover:bg-gray-100 ${
        styles && styles
      }`}
    >
      {/* First column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>{order.orderId}</span>
        </div>
      </td>

      {/* second column */}
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <div className="mr-2">
            <img
              className="w-6 h-6 rounded-full object-cover"
              src={order.customer.img}
            />
          </div>
          <span>{order.customer.name}</span>
        </div>
      </td>

      {/* third cloumn */}
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <div className="mr-2">
            <img
              className="w-6 h-6 rounded-full object-cover"
              src={order.product.img}
            />
          </div>
          <span>{order.product.name}</span>
        </div>
      </td>

      {/* fourth column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>${order.price}</span>
        </div>
      </td>

      {/* 5th column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>{order.vendor}</span>
        </div>
      </td>

      {/* 6th column */}
      <td className="py-3 px-6 text-center">{decide}</td>
    </tr>
  );
};

export default RecentOrderRow;
