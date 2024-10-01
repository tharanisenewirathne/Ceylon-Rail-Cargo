import React, { useEffect, useState } from "react";
import stations from "../stations.js";

const Adminreceivedorderc = React.forwardRef((props, ref) => {
  const [trackingCode, setTrackingCode] = useState("");
  const [orderRef, setOrderRef] = useState("");
  const [orders, setOrders] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const fetchData = () => {
    let ord = [];
    // const station_code = localStorage.getItem("admin_station_code");
    fetch(
      `https://project1-be0da-default-rtdb.firebaseio.com/InsertPakageData.json?orderBy="orderID"&equalTo="${trackingCode}"`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        response
          .json()
          .then((data) => {
            for (const key in data) {
              setOrderRef(key);
              if (Object.hasOwnProperty.call(data, key)) {
                const value = data[key];
                value.fromValue = stations[parseInt(value.fromValue)].name;
                value.toValue = stations[parseInt(value.toValue)].name;
                ord.push(value);
              }
            }
          })
          .then(() => {
            setOrders(ord);
            if (
              ord.length > 0 &&
              stations[parseInt(localStorage.getItem("admin_station_code"))]
                .name === ord[0].fromValue
            ) {
              setIsEnabled(false);
            } else if (ord.length > 0 &&
              stations[parseInt(localStorage.getItem("admin_station_code"))]
                .name === ord[0].toValue
            ) {
              setIsEnabled(true);
            }
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleDeliveredButtonClick = async () => {
    if (!isEnabled) return;
    try {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "Dilivered",
        }),
      };
      const response = await fetch(
        `https://project1-be0da-default-rtdb.firebaseio.com/InsertPakageData/${orderRef}.json`,
        options
      );
      const data = await response.json();
      setIsRefresh(true);
      // console.log("updating Data:", data);
    } catch (error) {
      console.error("Error updating order data:", error);
    }
  };

  const handleReceivedButtonClick = async () => {
    if (!isEnabled) return;
    try {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "Received",
        }),
      };
      const response = await fetch(
        `https://project1-be0da-default-rtdb.firebaseio.com/InsertPakageData/${orderRef}.json`,
        options
      );
      const data = await response.json();
      setIsRefresh(true);
      // console.log("updating Data:", data);
    } catch (error) {
      console.error("Error updating order data:", error);
    }
  };

  const handleViewOrder = () => {
    fetchData();
  };

  useEffect(() => {
    if (isRefresh) {
      fetchData();
      setIsRefresh(false);
    }
  }, [isRefresh]);

  return (
    <div>
      <div
        className="flex mt-10 bg-[#121212] text-gray-200"
        style={{
          display: "flex",
          paddingLeft: "18%",
          paddingTop: "3%",
          paddingBottom: "100%",
        }}
      >
        <div style={{ width: "85%", marginLeft: "3%" }}>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <div style={{ width: "70%" }}>
              <h1
                className=" text-xl font-bold "
                style={{
                  fontFamily: "Comfortaa",
                  paddingRight: "0%",
                  paddingTop: "0%",
                }}
              >
                Received Order Details
              </h1>
            </div>
            <div style={{ width: "30%" }}>
              <input
                type="text"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                placeholder="Enter Order ID"
                className="border w-[270px] h-[40px] bg-[#343434] border-[#343434] placeholder-gray-200 py-2 pl-4 rounded-md shadow-xl"
                style={{ borderRadius: "8px", width: "100%" }}
              />
              <button
                onClick={handleViewOrder}
                className="w-[110px] h-[40px]  mt-4 mb-20 bg-black text-white p-2 rounded-md shadow-xl"
                style={{ borderRadius: "8px" }}
              >
                View
              </button>
              {isEnabled && (
                <div>
                  <button
                    onClick={handleReceivedButtonClick}
                    className="w-[110px] h-[40px]  mt-4 mb-20 bg-black text-white p-2 rounded-md shadow-xl"
                    style={{ borderRadius: "8px" }}
                  >
                    Received
                  </button>
                  <button
                    onClick={handleDeliveredButtonClick}
                    className="w-[110px] h-[40px] ml-12 mt-4 mb-20 bg-black text-white p-2 rounded-md shadow-xl"
                    style={{ borderRadius: "8px" }}
                  >
                    Delivered
                  </button>
                </div>
              )}
            </div>
          </div>

          <div
            className=" shadow-black "
            style={{ flexDirection: "row", display: "flex" }}
          ></div>
          {/* Table to display orders */}
          <table className="table-10 mt-4  border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-7 py-2">Sender NIC</th>
                <th className="px-7 py-2">Receiver NIC</th>
                <th className="px-7 py-2">From</th>
                <th className="px-7 py-2">To</th>
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
                  <td className="border px-7 py-2">{order.fromValue}</td>
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

export default Adminreceivedorderc;
