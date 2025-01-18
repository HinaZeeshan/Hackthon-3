import Facts from '../../components/Pricing/Facts'
import Footer from '../../components/Footer'

import Reacticon from '../../components/about/Reacticon'
import React from 'react'
import PricingSection from '../../components/Pricing/Pricing'

const page = () => {
  return (
    <div>
      <PricingSection/>
      <Reacticon/>
      <Facts/>
      <Footer/>
    </div>
  )
}

export default page
