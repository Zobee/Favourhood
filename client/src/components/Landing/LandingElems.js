import styled from "styled-components";

export const LandingContainer = styled.div`
`

export const HeroBanner = styled.div`
  height: 50vh;
  background: url('img/hero.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0,0,0,0.3);
  background-blend-mode: multiply;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeroContentContainer = styled.div`
  text-align: center;
  color: #FFF;
  width: 70vw;
  max-width: 70vw;
`

export const HeroH1 = styled.h1`
  font-size: 3rem;
`

export const HeroSpan = styled.span`
  font-size: 4.1rem;
  color: #E78816;
`

export const HeroBtn = styled.button`
  border: none;
  outline: none;
  margin-top: 1rem;
  height: 2rem;
  width: 100%;
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
  background-color: ${({bgDark}) => (bgDark ? "#010606" : "#f9f9f9")};
`

export const LandingImg = styled.img`
  height: 85vh;
  max-width: 40vw;
  margin auto 2rem;
`

export const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({textLight}) => (textLight ? "#f9f9f9" : "#010606")};
`

export const LandingTextHeader = styled.h2`
  font-size: 4rem;
  text-align: center;
`

export const LandingTextP = styled.p`
`

export const CallToAction = styled.div`
  height: 10vh;
`
