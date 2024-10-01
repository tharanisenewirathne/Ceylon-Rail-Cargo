import React, { useState } from "react";
import stations from "../stations.js";

const Admintrackordersc = React.forwardRef((props, ref) => {
  /*const [trackingCode, setTrackingCode] = useState('');
  const [orders, setOrders] = useState([]);

    const handleTrackButtonClick = () => {
      // Handle the tracking logic here (e.g., send trackingCode to server)
      console.log(`Tracking code: ${trackingCode}`);
    
    const fetchedOrders = [
      { date: '2024-02-18', orderId: '123456', senderNIC: '200109200995', receiverNIC: '200109200995', fromStation:'KANDY',toStation:'GALLE',status: 'Delivered' },
      { date: '2024-02-17', orderId: '123456', senderNIC: '200109200995', receiverNIC: '200109200995', fromStation:'KANDY',toStation:'GALLE',status: 'In Transit' },
    ];
    setOrders(fetchedOrders);
  };*/

  const [orderID, setOrderID] = useState("");
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(false);

  // const fetchOrderData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`https://project1-be0da-default-rtdb.firebaseio.com/InsertPakageData.json?orderBy="orderID"&equalTo="${orderID}"`);
  //     const data = await response.json();
  //     setOrderData(data);
  //     console.log('Fetched Data:', orderData);
  //   } catch (error) {
  //     console.error('Error fetching order data:', error);
  //   }
  //   setLoading(false);
  // };

  const fetchOrderData = () => {
    setLoading(true);
    let ord = [];
    // const station_code = localStorage.getItem("admin_station_code");
    fetch(
      `https://project1-be0da-default-rtdb.firebaseio.com/InsertPakageData.json?orderBy="orderID"&equalTo="${orderID}"`
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
                value.fromValue = stations[parseInt(value.fromValue)].name;
                value.toValue = stations[parseInt(value.toValue)].name;
                ord.push(value);
              }
            }
          })
          .then(() => {
            setOrderData(ord);
          });
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setOrderID(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order ID:", orderID);

    fetchOrderData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="flex mt-10 bg-[#121212] text-gray-200"
          style={{
            display: "flex",
            paddingLeft: "18%",
            paddingTop: "3%",
            paddingBottom: "100%",
          }}
        >
          <div style={{ width: "88%", marginLeft: "3%" }}>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div style={{ width: "60%" }}>
                <h1
                  className="text-xl font-bold "
                  style={{ fontFamily: "Comfortaa", paddingRight: "0%" }}
                >
                  Track Orders
                </h1>
              </div>
              <div style={{ width: "40%" }}>
                <input
                  type="text"
                  value={orderID}
                  onChange={handleChange}
                  //onChange={(e) => setTrackingCode(e.target.value)}
                  placeholder="Enter Tracking Code"
                  className="border w-[210px] h-[40px] mb-20 bg-[#343434] border-[#343434] placeholder-gray-200 py-2 pl-4 rounded-md shadow-xl"
                  style={{ borderRadius: "8px" }}
                />
                <button
                  //onClick={handleTrackButtonClick}
                  className="w-[110px] h-[40px] mb-20 bg-black text-white p-2 rounded-md shadow-xl"
                  style={{ borderRadius: "8px" }}
                >
                  Track
                </button>
              </div>
            </div>

            <div
              className=" shadow-black"
              style={{ flexDirection: "row", display: "flex" }}
            ></div>
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
                      <td className="border px-4 py-2">
                        {orderData[key].date}
                      </td>
                      <td className="border px-4 py-2">
                        {orderData[key].orderID}
                      </td>
                      <td className="border px-7 py-2">
                        {orderData[key].snic}
                      </td>
                      <td className="border px-7 py-2">
                        {orderData[key].rnic}
                      </td>
                      <td className="border px-7 py-2">
                        {orderData[key].fromValue}
                      </td>
                      <td className="border px-7 py-2">
                        {orderData[key].toValue}
                      </td>
                      <td className="border px-7 py-2">
                        {orderData[key].status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </form>
    </div>
  );
});

export default Admintrackordersc;
