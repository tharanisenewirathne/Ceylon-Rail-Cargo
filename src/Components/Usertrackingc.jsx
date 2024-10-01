import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import stations from "../stations.js";

const Usertrackingc = () => {
  const [orderID, setOrderID] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchOrderData = async () => {
    setLoading(true);
    let ord = [];
    try {
      const response = await fetch(
        `https://project1-be0da-default-rtdb.firebaseio.com/InsertPakageData.json?orderBy="orderID"&equalTo="${localStorage.getItem('home_track_id')}"`
      );
      const data = await response.json();
      
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const value = data[key];
          value.fromValue = stations[parseInt(value.fromValue)].name;
          value.toValue = stations[parseInt(value.toValue)].name;
          ord.push(value);
        }
      }
    

      setOrderData(ord);
      console.log("Fetched Data:", orderData);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  return (
    <div>
      <nav className="bg-[#000000] h-18 fixed top-0 left-0 right-0 z-10 mx-auto px-3 p-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-[#ffffff] text-xl font-bold mr-4"
              style={{ fontFamily: "Comfortaa" }}
            >
              Ceylon Rail Cargo
            </Link>
          </div>
        </div>
      </nav>
      <h1
        className=" text-black text-xl mt-[6%] mr-8 pl-8 font-bold "
        style={{ fontFamily: "Comfortaa" }}
      >
        Track Your Order
      </h1>
      <div
        className="text-white rounded-md bg-black h-[70vh] mx-8 mt-[4%] p-5"
        style={{ borderRadius: "30px" }}
      >
        {/* Table to display orders */}
        {loading && <p>Loading...</p>}
        {!loading && !orderData && (
          <p>No data found for the entered order ID.</p>
        )}
        {orderData && (
          <table className="table-10 mt-4  border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-7 py-2">Sender NIC</th>
                <th className="px-7 py-2">Receiver NIC</th>
                <th className="px-7 py-2">From Station</th>
                <th className="px-7 py-2">To Station</th>
                <th className="px-7 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(orderData).map((key) => (
                <tr key={key}>
                  <td className="border px-4 py-2">{orderData[key].date}</td>
                  <td className="border px-4 py-2">{orderData[key].orderID}</td>
                  <td className="border px-7 py-2">{orderData[key].snic}</td>
                  <td className="border px-7 py-2">{orderData[key].rnic}</td>
                  <td className="border px-7 py-2">
                    {orderData[key].fromValue}
                  </td>
                  <td className="border px-7 py-2">{orderData[key].toValue}</td>
                  <td className="border px-7 py-2">{orderData[key].status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Usertrackingc;
