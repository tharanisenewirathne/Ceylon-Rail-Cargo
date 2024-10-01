import React, { useState, useEffect } from 'react'
import Network1 from '../Assets/Network1.jpg'
import Network2 from '../Assets/Network2.jpg'


export default function OurNetwork() {
  const [currentImage, setCurrentImage] = useState(Network1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the image after 5 seconds (5000 milliseconds)
      setCurrentImage((prevImage) => (prevImage === Network2 ? Network1 : Network2));
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='w-full bg-gradient-to-b bg-black pb-1 pl-2'>
        <div className='max-w-full  mr-4 ml-4 grid md:grid-cols-2 '>
        
        <div>
            <h2 className="text-white text-3xl font-bold mx-4 py-10"style={{ fontFamily: 'Comfortaa' }}>Our Network</h2>
            <p className="text-white text-base font-semibold  mx-4 py-auto"style={{ fontFamily: 'Comfortaa' }}>
            Welcome to the heartbeat of Sri Lanka's transportation matrix – the dynamic rail cargo network that 
            intertwines nine distinct train lines, threading through a network of 302 stations. Operated by the 
            Sri Lanka Railway, this intricate system orchestrates approximately 396 trains daily, a mosaic that 
            includes 67 Long-Distance and 16 Intercity trains.
            </p><br/>
            <p className="text-white text-base font-semibold mx-4 py-auto"style={{ fontFamily: 'Comfortaa' }}>
            Beyond the mere movement of trains, this network is a lifeline, pulsating with vitality as it plays 
            a pivotal role in the daily lives of millions. A testament to its significance, the rail cargo system 
            carries an impressive load, transporting about 3.72 million passengers each day.

            </p><br/>
            <p className="text-white text-base font-semibold mx-4 py-auto"style={{ fontFamily: 'Comfortaa' }}>
            As we navigate through the veins of this robust rail infrastructure, we uncover a tapestry of 
            connectivity, seamlessly linking urban hubs and remote corners of the island. This introduction 
            invites you to delve into the complexity of Sri Lanka's rail cargo network – a vital force propelling 
            both passengers and goods, weaving together the fabric of the nation's transport landscape.
            </p><br/>


        </div>
        <div className='max-w-full h-full mr-8 ml-4 '>
            
        <img src={currentImage} alt="/" className='max-w-full h-screen '
        style={{transition: 'opacity 4s ease-in-out',
              opacity: currentImage === Network1 ? 1 : 0,
          }}/>
    
        </div>
        </div>

    </div>
  )
}
