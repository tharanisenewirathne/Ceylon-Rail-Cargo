import React, { useEffect, useState } from "react";
import stations from "../stations.js";

const Adminorderdetailsc = React.forwardRef((props, ref) => {
  const [trackingCode, setTrackingCode] = useState("");
  const [orders, setOrders] = useState([]);

  const handleTrackButtonClick = () => {
    // Handle the tracking logic here (e.g., send trackingCode to server)
    console.log(`Tracking code: ${trackingCode}`);
  };

  const fetchData = () => {
    let ord = [];
    const station_code = localStorage.getItem("admin_station_code");
    fetch(
      "https://project1-be0da-default-rtdb.firebaseio.com/InsertPakageData.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        response
          .json()
          .then((data) => {
            for (const key in data) {
              if (Object.hasOwnProperty.call(data, key)) {
                const value = data[key];
                value.toValue = stations[parseInt(value.toValue)].name;
                ord.push(value);
              }
            }
          })
          .then(() => {
            setOrders(ord);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div
        className="flex mt-10 bg-[#121212] text-gray-200 "
        style={{
          display: "flex",
          paddingLeft: "18%",
          paddingTop: "3%",
          paddingBottom: "100%",
        }}
      >
        <div style={{ width: "85%", marginLeft: "3%" }}>
          <div
            className=" shadow-black"
            style={{ flexDirection: "row", display: "flex" }}
          >
            <h1
              className=" flex mb-20 text-xl font-bold "
              style={{ fontFamily: "Comfortaa", paddingRight: "70%" }}
            >
              Order Details
            </h1>
          </div>
          {/* Table to display orders */}
          <table className="table-10 mt-4  border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-7 py-2">Sender NIC</th>
                <th className="px-7 py-2">Receiver NIC</th>
                <th className="px-7 py-2">Station</th>
                <th className="px-7 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{order.date}</td>
                  <td className="border px-4 py-2">{order.orderID}</td>
                  <td className="border px-7 py-2">{order.snic}</td>
                  <td className="border px-7 py-2">{order.rnic}</td>
                  <td className="border px-7 py-2">{order.toValue}</td>
                  <td className="border px-7 py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});
export default Adminorderdetailsc;
