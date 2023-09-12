import img1 from "../../../../assets/img/products/4.png";
import img2 from "../../../../assets/img/products/5.png";
import img3 from "../../../../assets/img/products/6.png";
import BestSellRow from "./BestSellRow";
// Dummy data
const products = [
  {
    id: 1,

    product: {
      name: "Product A",
      img: img1, // Placeholder image
      date: "26-08-2023",
    },
    price: 49.99,
    orders: 20,
  },
  {
    id: 2,

    product: {
      name: "Product B",
      img: img2, // Placeholder image
      date: "26-08-2023",
    },
    price: 49.23,
    orders: 22,
  },
  {
    id: 3,

    product: {
      name: "Product C",
      img: img3, // Placeholder image
      date: "26-08-2023",
    },
    price: 49.99,
    orders: 20,
  },

  // Add more orders as needed...
];

/*
    conponents
 */
const BestSellingProduct = () => {
  return (
    <div className="pt-8">
      <div className="mb-1 flex flex-col sm:flex-row justify-between items-center">
        <p className="capitalize md:text-lg text-slate-700 font-semibold w-full sm:w-1/2 sm:mb-0 mb-4">
          Best selling products
        </p>
        <div className="flex items-center w-full  sm:w-1/2 sm:justify-end">
          {/* <p className="capitalize text-lg text-slate-700 font-semibold">
            sort by :{" "}
          </p> */}
          <label
            htmlFor="sort"
            className="capitalize md:text-lg text-slate-700 font-semibold w-16"
          >
            Sort by
          </label>

          <select
            id="sort"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-40"
          >
            <option value={"today"}>Today</option>
            <option value={"yesterday"}>Yesterday</option>
          </select>
        </div>
      </div>
      <hr />
      {/* table */}
      <div className="overflow-x-auto element-with-scrollbar">
        <div className="min-w-screen  flex items-center justify-center bg-gray-100 font-sans ">
          <div className="w-full ">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <tbody className="text-gray-600 text-sm font-light">
                  {products?.map((product, index) => {
                    return index % 2 === 0 ? (
                      <BestSellRow
                        key={product.id}
                        product={product}
                        styles={"bg-gray-50"}
                      />
                    ) : (
                      <BestSellRow key={product.id} product={product} />
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

export default BestSellingProduct;
