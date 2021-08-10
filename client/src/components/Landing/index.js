import {
  LandingContainer, 
  HeroBanner, 
  HeroContentContainer, 
  HeroH1, 
  HeroSpan,
  HeroBtn, 
  LandingSection, 
  CallToAction}
from './LandingElems'

import { useState, useEffect } from 'react'

const wordBank = ["Favour", "Solid", "Kindness", "Courtesy", "Good", "Service", "Benefit", "Comfort"]

const getRandomWord = (wordBank) => {
  const randInt = Math.floor(Math.random() * wordBank.length)
  return wordBank[randInt]
}

const Landing = () => {
  const [word, setWord] = useState("Favour");

  useEffect(() => {
    const wordChangeId = setInterval(() => setWord(getRandomWord(wordBank)), 1000);
  
    return () => clearInterval(wordChangeId);
  });
  return (
    <LandingContainer>
      <HeroBanner>
        <HeroContentContainer>
          <HeroH1>Do Someone A <HeroSpan>{word}</HeroSpan> Today</HeroH1>
          <HeroBtn>Get Started</HeroBtn>
        </HeroContentContainer>
      </HeroBanner>
      <LandingSection>

      </LandingSection>
      <LandingSection>
        
      </LandingSection>
      <LandingSection>
        
      </LandingSection>
      <CallToAction>

      </CallToAction>
    </LandingContainer>
  )
}

export default Landing
