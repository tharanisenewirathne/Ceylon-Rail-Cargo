import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contactus1 from '../Assets/Contactus1.png';
import Contactus2 from '../Assets/Contactus2.jpg';

const Contactusc = React.forwardRef((props, ref) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!user.firstName.trim()) {
      alert('First Name is required');
      return;
    }

    if (!user.lastName.trim()) {
      alert('Last Name is required');
      return;
    }

    if (!user.email.trim()) {
      alert('Email is required');
      return;
    }

    if (!user.phoneNo.trim()) {
      alert('Phone No is required');
      return;
    }

    if (!user.description.trim()) {
      alert('Description is required');
      return;
    }

    // Validation for email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(user.email)) {
      alert('Invalid email format');
      return;
    }

    // Validation for phone number format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(user.phoneNo)) {
      alert('Invalid phone number format (must be 10 digits)');
      return;
    }

    // If all validations pass, proceed with form submission
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };

    fetch('https://project1-be0da-default-rtdb.firebaseio.com/ContactusData.json', options)
      .then(response => {
        if (response.ok) {
          alert("Data sent successfully!");
          setUser({
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            description: ''
          });
        } else {
          throw new Error('Error sending data to server.');
        }
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div ref={ref}>
      <div className='form'>
        <form method='POST'>
          <div className='max-w-[1240px] bg-[#121212] text-gray-200 mx-full ml-8 h-screen grid md:grid-cols-2  text-center ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='text-left' style={{ flex: 1 }}>
              <nav className="bg-[#000000] h-18 fixed top-0 left-0 right-0 z-10 mx-auto px-3 p-3">
                <div className="container mx-auto flex items-center justify-between">
                  <div className="flex items-center">
                    <Link to="/" className="text-[#ffffff] text-xl font-bold mr-4" style={{ fontFamily: 'Comfortaa' }}>
                      Ceylon Rail Cargo
                    </Link>
                  </div>
                </div>
              </nav>

              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ width: '50%' }}>
                  <label htmlFor="firstName">First Name:</label><br />
                  <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    autoComplete='off'
                    required
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    placeholder="Enter First Name"
                    className="border w-[190px] bg-[#343434] border-[#343434] placeholder-gray-200 h-[40px] p-2 rounded-md shadow-xl"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
                <div style={{ width: '50%' }}>
                  <label htmlFor="lastName">Last Name:</label><br />
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    autoComplete='off'
                    required
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    placeholder="Enter Last Name"
                    className="border w-[190px] bg-[#343434] border-[#343434] placeholder-gray-200 p-2  rounded-md shadow-xl"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
              </div>
              <br />
              <div>
                <label htmlFor="email">Email:</label><br />
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  autoComplete='off'
                  required
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Enter your E-Mail"
                  className="border w-[400px] bg-[#343434] border-[#343434] placeholder-gray-200 p-2  rounded-md shadow-xl"
                  style={{ borderRadius: '8px' }}
                />
              </div><br />
              <div>
                <label htmlFor="phoneNo">Phone No:</label><br />
                <input
                  type="tel"
                  name="phoneNo"
                  value={user.phoneNo}
                  autoComplete='off'
                  required
                  onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
                  placeholder="Enter Phone Number"
                  className="border w-[200px] bg-[#343434] border-[#343434] placeholder-gray-200 p-2  rounded-md shadow-xl"
                  style={{ borderRadius: '8px' }}
                />
              </div><br />
              <div>
                <label htmlFor="description">Description:</label><br />
                <textarea
                  name="description"
                  value={user.description}
                  autoComplete='off'
                  required
                  onChange={(e) => setUser({ ...user, description: e.target.value })}
                  className="border w-[400px] h-[200px] bg-[#343434] border-[#343434] placeholder-gray-200 p-2  rounded-md shadow-xl"
                  style={{ borderRadius: '8px' }}
                />
              </div><br />
              <div>
                <button onClick={handleSubmit} className="w-[100px] bg-[#3a6cc3] text-white p-2 rounded-md shadow-xl" style={{ borderRadius: '8px' }}>
                  Submit
                </button>
              </div>
            </div>

            <img src={Contactus1} alt="Your Image" className='max-w-full h-full mr-3 ml-20 ' />

          </div>
        </form>
      </div>
    </div>
  );
});

export default Contactusc;
