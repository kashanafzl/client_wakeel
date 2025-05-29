import React from 'react'
import Navbar from './Navbar/Navbar'
import Mainsection from './Herosection/Mainsection'
import Nyc from './Nyc/Nyc'
import Whychoose from './Whychooseus/Whychoose'
import OurPractice from './Ourpractice/Ourpractice'
import Plus from './Plus/Plus'
import Video from './Video/Video'
import Popular from './Popular/Popular'
import Testimonails from './Testimonails/Testimonails'
import Footer from './Footer/Footer'

export default function Home() {
  return (
    <div>

        <Navbar/>
        <Mainsection/>
        <Nyc/>
        <Whychoose/>
        <OurPractice/>
        <Plus/>
        <Video/>
        <Popular/>
        <Testimonails/>
        <Footer/>
    </div>
  )
}
