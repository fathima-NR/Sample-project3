import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ContactUs from './Pages/ContactUs/Contactus'
import Sevices from './Pages/Services/Sevices'
import Web from './Pages/Services/Web'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import EVL from './Pages/Services/EVL'
import AMV from './Pages/Services/AMV'
import Cloud from './Pages/Services/Cloud'
import Cyber from './Pages/Services/Cyber'
import Aboutus from './Pages/AboutUs/Aboutus'
import HomeAbout from './Components/Body/HomeAbout'
import Home from './Pages/Home/Home'
import IT from './Pages/Services/IT'
import Services from './Pages/Services/Sevices'


function Temp() {
  return (
   <>
{/* // <Navbar/> */}
{/* <ContactUs/> */}
{/* <Sevices/> */}
{/* <Web/> */}
{/* <Cyber/> */}
{/* <IT/> */}
{/* <Cloud/> */}
{/* <Web/> */}
{/* <Aboutus/> */}
{/* <Home/>
<Footer/> */}
  <BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/Cyber" element={<Cyber />} />
  <Route path="/IT" element={<IT/>} />
  <Route path="/AMV" element={<AMV />} />
  <Route path="/EVL" element={<EVL />} />
  <Route path="/Cloud" element={<Cloud />} />
  <Route path="/Web" element={<Web/>} />
  <Route path="/Services" element={<Services />} />
  <Route path="/Aboutus" element={<Aboutus />} />
  <Route path="/Contactus" element={<ContactUs />} />

</Routes>
<Footer/>
</BrowserRouter>


   </>
   
  )
}

export default Temp

