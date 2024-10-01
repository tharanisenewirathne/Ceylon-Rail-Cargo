import React from "react";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="bg-[#000300] 
     w-[18%] h-screen fixed">
      <div className="h-20 items-center">
      <div className="flex items-center  ">
        <Link to="" className="text-gray-200 text-xl font-bold pl-4 py-10"style={{ fontFamily: 'Comfortaa' }}>
            Ceylon Rail Cargo
          </Link>
       </div>
       <div className="flex items-center  ">
        <Link to="/AdminDashboard" className="text-gray-200 text-lg font-bold pl-10 py-10"style={{ fontFamily: 'Comfortaa' }}>
            Dashboard
          </Link>
       </div>
       <div className="flex items-center  ">
        <Link to="/AdminInsertPackage" className="text-gray-200 text-lg font-bold pl-10 pb-10"style={{ fontFamily: 'Comfortaa' }}>
            Insert Package
          </Link>
       </div>
       <div className="flex items-center  ">
        <Link to="/AdminReceivedPackage" className="text-gray-200 text-lg font-bold pl-10 pb-10"style={{ fontFamily: 'Comfortaa' }}>
            Received Package
          </Link>
       </div>
       <div className="flex items-center  ">
        <Link to="/AdminOrderDetails" className="text-gray-200 text-lg font-bold pl-10 pb-10"style={{ fontFamily: 'Comfortaa' }}>
            Order Details
          </Link>
       </div>
       <div className="flex items-center  ">
        <Link to="/AdminTrackOrders" className="text-gray-200 text-lg font-bold pl-10 pb-10"style={{ fontFamily: 'Comfortaa' }}>
            Track Orders
          </Link>
       </div>
       <div className="flex items-center  ">
        <Link to="/AdminCustomerFeedback" className="text-gray-200 text-lg font-bold pl-10 pb-10"style={{ fontFamily: 'Comfortaa' }}>
            Feedbacks
          </Link>
       </div>
       <div className="flex items-center  ">
        <Link to="/AdminDownloads" className="text-gray-200 text-lg font-bold pl-10 pb-10"style={{ fontFamily: 'Comfortaa' }}>
            Downloads
          </Link>
       </div>
       {/* <div className="flex items-center  ">
        <Link to="/AdminReports" className="text-gray-200 text-lg font-bold pl-10 pb-10"style={{ fontFamily: 'Comfortaa' }}>
            Reports
          </Link>
       </div> */}
       
      </div>
    </div>
  );
};

export default Sidebar;