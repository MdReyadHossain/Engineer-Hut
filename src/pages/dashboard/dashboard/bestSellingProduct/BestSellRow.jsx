const BestSellRow = ({ product, styles }) => {
  return (
    <tr
      className={`border-b border-gray-200 hover:bg-gray-100 ${
        styles && styles
      }`}
    >
      {/* First column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center space-x-4">
          <div>
            <img
              src={product.product.img}
              alt={product.product.name}
              className="object-cover w-10 h-10"
            />
          </div>
          <div>
            <p className="text-slate-700 text-lg font-semibold">
              {product.product.name}
            </p>
            <p className="text-slate-600">{product.product.date}</p>
          </div>
        </div>
      </td>

      {/* second column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex flex-col items-center">
          <span className="text-slate-700 text-lg font-semibold">Price</span>
          <span className="text-slate-600">${product.price}</span>
        </div>
      </td>

      {/* 3rd column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex flex-col items-center">
          <span className="text-slate-700 text-lg font-semibold">Orders</span>
          <span className="text-slate-600">{product.orders}</span>
        </div>
      </td>
    </tr>
  );
};

export default BestSellRow;
