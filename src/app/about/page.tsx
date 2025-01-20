import About from '../../components/about/About'
import About2 from '../../components/about/About2'

import Likes from '../../components/about/Likes'
import Reacticon from '../../components/about/Reacticon'
import Team from '../../components/about/Team'
import Views from '../../components/about/Views'
import React from 'react'

const page = () => {
  return (
    <div>
      <About/>
      <Likes/>
      <Views/>
      <Team/>
      <Reacticon/>
      <About2/>
     
    </div>
  )
}

export default page
