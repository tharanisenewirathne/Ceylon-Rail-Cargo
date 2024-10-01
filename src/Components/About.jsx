import React from 'react'
import About1 from '../Assets/About1.png'

// export default function (){
const About = React.forwardRef((props, ref) => {
  
  return (
    <div  ref={ref}>
    <div className='w-full h-[140vh] bg-black'>
      
        <div className='max-w-full h-[140vh]  grid md:grid-cols-2'>
        <img src={About1} alt="/" className='max-w-[1300px] w-[1300px] h-[120vh] '/>
        
        <div className="rounded-md bg-gradient-to-b from-black to-[#012002] mx-4 h-[130vh] my-6 p-4"style={{ borderRadius: '30px'}}>
            <h2 className="text-white text-3xl font-bold mx-2 py-10"style={{ fontFamily: 'Comfortaa' }}>About Us</h2>
            <p className="text-white text-base mx-2 py-auto"style={{ fontFamily: 'Comfortaa' }}>
            Sri Lanka Railways ( SLR ) is a government department functioning under the Ministry of Transport.
            It is a major transport service provider and is the only rail transport organization in the country. 
            SLR transports both passenger and freight. At its inception, railway was carrying more freight than passenger. 
            But today, it is passenger oriented. SLR’s market share for passenger transport is about 6.0 % and about 0.7 % 
            for goods transport.</p><br/><br/><br/>
            <p className="text-white text-base mx-2 py-auto"style={{ fontFamily: 'Comfortaa' }}>
            In Sri Lanka, the service provided by SLR in carrying the daily commuters to their workplaces, is inevitable. 
            Sri Lanka Railway operates approximately 396 trains which include 67 Long-Distance and 16 Intercity trains and carries 
            about 3.72 Million passengers daily.
            SLR owns and maintains 1561km of rail tracks, 72 locomotives,power sets 78, 565 carriages and the signalling network. 
            At present, it has a workforce of 17,634.
            </p><br/><br/><br/>
            <p className="text-white text-base mx-2 py-auto"style={{ fontFamily: 'Comfortaa' }}>
            Sri Lanka Railways ( SLR ) functions under the General Manager of Railways (GMR). The General Manager reports
            to the Secretary of the Ministry of Transport.
            SLR has been divided into ten Sub Departments and three Units. Sub departments are managed 
            by the Heads of the Sub Departments who reports directly to the General Manager of Railways</p>
        </div>
        </div>

    </div>
    </div>
  )
});


export default About;