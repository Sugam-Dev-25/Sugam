import React from 'react'
import HeroBanner from './components/HeroBanner'
import ServicesSection from './components/ServicesSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'

const HomeComponents = () => {
  return (
    <div>
      <HeroBanner/>
      <ServicesSection/>
      <SkillsSection/>
      <ExperienceSection/>
    </div>
  )
}

export default HomeComponents