import styled from "styled-components";

export const LandingContainer = styled.div`
  font-family: 'Poppins', sans-serif;
`

export const HeroBanner = styled.div`
  height: 50vh;
  display: flex;
  background-color: #333FAF;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  position: relative;
`

export const HeroContentContainer = styled.div`
  text-align: center;
  color: #FFF;
  width: 70vw;
  max-width: 70vw;
`

export const HeroH1 = styled.h1`
  font-size: 5rem;
`

export const HeroSpan = styled.span`
  font-size: 6rem;
  color: #E78816;
  transition: all 0.25s ease;
`

export const HeroBtn = styled.button`
  border: none;
  outline: none;
  margin-top: 1rem;
  height: 3rem;
  font-size: 1.5rem;
  width: 80%;
  background-color: #F9A826;
  color: #FFF;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0.1rem 0.1rem #222;

  &:hover {
    background-color: #E78816;
    box-shadow: 0.05rem 0.03rem black;
  }
`

export const LandingSection = styled.div`
  display: flex;
  padding: 2rem;
  background-color: ${({bgDark}) => (bgDark ? "#434343" : "#FAFAFA")};
  position: relative;
`

export const LandingImg = styled.img`
  height: 90vh;
  max-width: 40vw;
  margin auto 2rem;
`

export const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({textLight}) => (textLight ? "#f9f9f9" : "#010606")};
`

export const LandingTextHeader = styled.h2`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
`

export const LandingTextP = styled.p`
  font-family: 'Roboto', sans-serif;
`

export const CallToAction = styled.div`
  height: 10vh;
`