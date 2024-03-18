import React from 'react'
import Nav from '../components/Nav'
import HomeSection1 from '../components/HomeSection1'
import HomeSection2 from '../components/HomeSection2'
import HomeSection3 from '../components/HomeSection3'
// import HomeSection4 from '../components/HomeSection4'
import ImageUploader from '../components/ImageUploader'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      
      <div className='max-w-[1400px] w-full'>
          
          <section ><HomeSection1/></section>
          <section ><HomeSection2/></section>
          <section className='m-10'><HomeSection3/></section>
          {/* <section><HomeSection4/></section> */}
          <section><ImageUploader/></section>
          <section><Footer/></section>
      </div>
    </div>
  )
}

export default Home