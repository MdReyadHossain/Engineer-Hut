import BestSellingProduct from "./bestSellingProduct/BestSellingProduct";
import RecentOrder from "./recentOrder/RecentOrder";
import Summery from "./summery/Summery";

const DashBoard = () => {
  return (
    <div className="bg-gray-100 m-4 p-2 ">
      <Summery />
      <BestSellingProduct />
      <RecentOrder />
    </div>
  );
};

export default DashBoard;
