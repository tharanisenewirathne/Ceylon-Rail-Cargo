import React , { useEffect, useState } from 'react'

const Admincustomerfeedbackc = React.forwardRef((props, ref)=> {

  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://project1-be0da-default-rtdb.firebaseio.com/ContactusData.json');
      const data = await response.json();
      const dataArray = Object.values(data); 
      setContactData(dataArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
    <div className='flex mt-10 bg-[#121212] text-gray-200 ' style={{ display: 'flex', paddingLeft: '18%', paddingTop: '3%', paddingBottom: '100%'}}>
      <div style={{width:'85%',marginLeft:'3%'}}> 
      <div className=" shadow-black"style={{flexDirection:'row',display:'flex'}}>
      <h1 className=" flex mb-20 text-xl font-bold "style={{ fontFamily: 'Comfortaa', paddingRight:'70%'}}>Customer Feedbacks</h1>

      </div>
      {/* Table to display orders */}
      <table className="table-10 mt-4  border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-9 py-2">E-mail</th>
              <th className="px-4 py-2">Phone No</th>
              <th className="px-10 py-2">Description</th>
              
            </tr>
          </thead>
          <tbody>
            {contactData.map((contact, index)  => (
              <tr key={index}>
                <td className="border px-4 py-2">{contact.firstName}</td>
                <td className="border px-4 py-2">{contact.lastName}</td>
                <td className="border px-9 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.phoneNo}</td>
                <td className="border px-10 py-2">{contact.description}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  </div>
</div>
)
});

export default Admincustomerfeedbackc