import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Trackpage3 from "../Assets/Trackpage3.jpg";

//export default function Trackc() {
const Trackc = React.forwardRef((props, ref) => {
  const navigator = useNavigate();
  const [trackingCode, setTrackingCode] = useState("");

  const handleTrackButtonClick = () => {
    // Handle the tracking logic here (e.g., send trackingCode to server)
    // console.log(`Tracking code: ${trackingCode}`);
    localStorage.setItem("home_track_id", trackingCode);
    navigator("/UserTrackingPage");
  };
  return (
    <div
      ref={ref}
      style={{
        backgroundImage: `url(${Trackpage3})`,
        backgroundSize: "cover",
        backgroundPosition: "fit",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-[160vh] text-black">
        <div className="max-w-full  w-full h-screen mx-auto text-center flex flex-col justify-center shadow-xl">
          <div>
            <p
              className="text-white text-xl font-bold mt-40  "
              style={{ fontFamily: "Comfortaa" }}
            >
              Everyday is a new day for us and we work really hard to satisfy
              our customer everywhere
            </p>
          </div>
          <div className="mt-60 shadow-black">
            <input
              type="text"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="Enter Tracking Code"
              className="border w-[500px] border-gray-300 py-2 pl-4 rounded-md shadow-xl"
              style={{ borderRadius: "8px" }}
            />
            <button
              onClick={handleTrackButtonClick}
              className="w-[80px] bg-black text-white p-2 rounded-md shadow-xl"
              style={{ borderRadius: "8px" }}
            >
              Track
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Trackc;
