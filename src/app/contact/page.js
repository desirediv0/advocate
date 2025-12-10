
import ContactPage from '@/components/contact'
import Hero from '@/components/hero'
import React from 'react'

const Service = () => {
  return (
    <div className=' min-h-screen'>
      <Hero heading="Contact Us" banner="/img3.jpg" mobileBanner="/img3.jpg" />
      <ContactPage />
    </div>
  )
}

export default Service