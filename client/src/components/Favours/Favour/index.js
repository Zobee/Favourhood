import React from 'react'
import {FavourContainer,
  FavourTitle,
  FavourDescription,
  FavourInfoSection,
  FavourCreator,
  FavourStatus,
  FavourAcceptor,
  InfoSpan,
  AcceptFavourBtn} from '../FavourElems'

const Favour = ({title, desc, creator, status, acceptor}) => {
  return (
    <FavourContainer>
      <FavourTitle>{title}</FavourTitle>
      <FavourDescription>{desc}</FavourDescription>
      <FavourInfoSection>
        <FavourCreator>Requested By: <InfoSpan>{creator}</InfoSpan></FavourCreator>
        <FavourStatus>Status: <InfoSpan>{status}</InfoSpan></FavourStatus>
        {status !== "Not Started" ?
        <FavourAcceptor>Accepted By: <InfoSpan>{acceptor}</InfoSpan></FavourAcceptor>
        :
        <AcceptFavourBtn>Take On Favour</AcceptFavourBtn>}
      </FavourInfoSection>
    </FavourContainer>
  )
}

export default Favour
