import styled from 'styled-components';

export const FavoursSection = styled.div`
height: 88vh;
`

export const FavoursContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  white-space: nowrap;
`

export const FavourContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 20vw;
  border-radius: 12px;
  box-shadow: 0.2rem 0.2rem #555;
  margin: 2em;
  padding: 2em;
  cursor: pointer;
  white-space: normal;
  background: linear-gradient(
    to top left,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
  transition: all 0.5s ease;

  &:hover{
    transform: scale(1.05);
  }
`

export const FavourTitle = styled.h1`
`

export const FavourDescription = styled.p`
  flex: 1;
`

export const FavourInfoSection = styled.section`
  display: flex;
  justify-content: space-between;
`

export const FavourCreator = styled.p`
`

export const FavourStatus = styled.p`
`

export const FavourAcceptor = styled.p`
`

export const AcceptFavourBtn = styled.button`
`

export const InfoSpan = styled.span`
  font-weight: 700;
`

export const AddFavourBtn = styled.button`
  outline: none;
  border: none;
`