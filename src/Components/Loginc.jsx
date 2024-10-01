import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Loginc() {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLogged, setIsLogged] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = () => {
    fetch("https://project1-be0da-default-rtdb.firebaseio.com/admins.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        response.json().then((data) => {
          data.forEach((admin) => {
            if (
              formData.username === admin.username &&
              formData.password === admin.password
            ) {
              setIsLogged(true);
              localStorage.setItem("admin_station_code", admin.code);
              navigator("/Admindashboard");
              return;
            }
          });
        });
      })
      .then(() => {
        // if (!isLogged) alert("Invalid username or password");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className=" text-left bg-black" style={{ flex: 1 }}>
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
      <div className="flex items-center justify-center h-screen">
        <div
          className="rounded-md bg-gradient-to-b from-[#272d86] to-black flex h-[65vh] w-[65vh] flex-col items-center 
        justify-center p-8"
          style={{ borderRadius: "30px" }}
        >
          <div
            className="flex flex-col justify-center items-center space-y-4"
            style={{ fontFamily: "Comfortaa" }}
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              required onChange={handleInputChange}
              className="rounded-md px-4 py-2 w-[45vh] bg-[#121212] text-white
               placeholder-gray-200"
              style={{ borderRadius: "10px" }}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              required onChange={handleInputChange}
              className="rounded-md px-4 py-2 w-[45vh] bg-[#121212] text-white
               placeholder-gray-200"
              style={{ borderRadius: "10px" }}
            />
            <br />
            <br />
            <br />
            <input
              type="submit" // Change this to 'button' if you want a non-submit button
              value="Login"
              onClick={login}
              className="rounded-md px-4 py-2 w-[25vh] bg-[#272d86] text-white font-semibold 
              cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              style={{ borderRadius: "10px" }}
            />
            {/* <div className="flex items-center">
              <Link
                to="/Admindashboard"
                className="text-[#ffffff] text-sm mr-4"
                style={{ fontFamily: "Comfortaa" }}
              >
                Test Login
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
