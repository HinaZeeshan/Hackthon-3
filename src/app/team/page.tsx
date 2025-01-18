import Footer from '../../components/Footer'
import FreeTrail from '../../components/Team/Freetrail'
import MeetOurTeam from '../../components/Team/Meetourteam'
import Teamgallery from '../../components/Team/Teamgallery'

import React from 'react'

const page = () => {
  return (
    <div>
      <Teamgallery/>
    <MeetOurTeam/>
    <FreeTrail/>
      <Footer/>
    </div>
  )
}

export default page
