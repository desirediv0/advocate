
import Hero from '@/components/hero'
import PracticeAreasSection from '@/components/PracticeAreas'
import React from 'react'

const Service = () => {
  return (
    <div className=' min-h-screen'>
      <Hero
        heading="Practice Areas"
        subtitle="Expert Legal Representation"
        description="Specialized practice areas including civil, criminal, family, and corporate law — tailored to your needs."
        banner="/img4.jpg"
        mobileBanner="/img4.jpg"
      />
      <PracticeAreasSection />


    </div>
  )
}

export default Service