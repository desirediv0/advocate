import Hero from '@/components/hero'
import Expertise from '@/components/Expertise'
import React from 'react'

const OurExpertise = () => {
    return (
        <div>
            <Hero
                heading="Our Expertise"
                subtitle="Advocate — Legal Counsel"
                description="We specialize in diverse legal domains, offering expert counsel and representation to safeguard your rights and interests."
                banner="/img2.jpg"
                mobileBanner="/img2.jpg"
            />
            <Expertise />
        </div>
    )
}

export default OurExpertise
