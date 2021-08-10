import {
  LandingContainer, 
  HeroBanner, 
  HeroContentContainer, 
  HeroH1, 
  HeroSpan,
  HeroBtn, 
  LandingSection, 
  LandingImg,
  LandingText,
  LandingTextHeader,
  LandingTextP,
  CallToAction}
from './LandingElems'

import { useState, useEffect } from 'react'

const placeholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Mauris velit elit, posuere id odio et, rhoncus tincidunt metus. Cras non hendrerit urna. 
Sed vel nibh sit amet ligula consequat euismod. Integer at nibh purus. 
Interdum et malesuada fames ac ante ipsum primis in faucibus. 
Cras sit amet justo nec metus cursus dapibus. Proin consectetur enim eget urna auctor eleifend. 
Etiam et cursus justo. Nunc iaculis lobortis enim, vel consectetur eros sodales sed. 
Cras facilisis quam a velit scelerisque posuere id eget eros. Curabitur id libero rutrum, 
blandit diam et, laoreet lacus. Nullam dui nulla, semper ac ex sed, gravida vestibulum sapien. 
Nunc tempus venenatis orci, vel efficitur massa finibus vitae. Sed vitae massa tempor, congue purus at, 
commodo mi. Curabitur faucibus maximus porta. In auctor eget velit at scelerisque.`

const wordBank = ["Favour", "Solid", "Kindness", "Courtesy", "Good", "Service", "Benefit", "Comfort"]

const getRandomWord = (wordBank) => {
  const randInt = Math.floor(Math.random() * wordBank.length)
  return wordBank[randInt]
}

const Landing = () => {
  const [word, setWord] = useState("Favour");
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    const wordChangeId = setInterval(() => setWord(getRandomWord(wordBank)), 1000);
  
    return () => clearInterval(wordChangeId);
  },[]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  },[]);

  return (
    <LandingContainer>
      <HeroBanner>
        <HeroContentContainer style={{ transform: `translateY(${offsetY * 0.15}px)`}}>
          <HeroH1 >Do Someone A <HeroSpan>{word}</HeroSpan> Today</HeroH1>
          <HeroBtn>Get Started</HeroBtn>
        </HeroContentContainer>
      </HeroBanner>
      <LandingSection>
        <LandingImg src={'img/landing1.svg'}/>
        <LandingText>
          <LandingTextHeader>Help Others</LandingTextHeader>
          <LandingTextP>{placeholder}</LandingTextP>
        </LandingText>
      </LandingSection>
      <LandingSection bgDark={true}>
        <LandingText textLight={true}>
          <LandingTextHeader>Build A Community</LandingTextHeader>
          <LandingTextP>{placeholder}</LandingTextP>
        </LandingText>
        <LandingImg src={'img/landing2.svg'}/>
      </LandingSection>
      <LandingSection>
        <LandingImg src={'img/landing3.svg'}/>
        <LandingText>
          <LandingTextHeader>Join The Favourhood</LandingTextHeader>
          <LandingTextP>{placeholder}</LandingTextP>
        </LandingText>
      </LandingSection>
      <CallToAction>
        GET YOUR FAVOUR ON
      </CallToAction>
    </LandingContainer>
  )
}

export default Landing
