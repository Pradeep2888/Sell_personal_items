import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from './sections/Banner'
import Services from './sections/Services'
import SellProducts from './sections/SellProducts'
import Newsletter from './sections/Newsletter'
import CustomerReviews from './sections/CustomerReviews'
import ContactUs from './sections/ContactUs'

function Home() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <Services />
      </div>
      {/* <div>
        <SellProducts />
      </div> */}
      <div>
        <Newsletter />
      </div>
      <div>
        {/* <CustomerReviews /> */}
      </div>
      <div>
        {/* <ContactUs /> */}
      </div>
    </>
  )
}

export default Home