import Favour from './Favour'
import { FavoursSection, FavoursContainer, AddFavourBtn } from './FavourElems'

const favourData = [
  {
    id: 1,
    title: "Can I Borrow Some Sugar?",
    desc: "I want to bake a cake",
    creator: "Bob",
    status: "Not Started",
    acceptor: ""
  },
  {
    id: 2,
    title: "Could Someone Mow My Lawn?",
    desc: "",
    creator: "Maria",
    status: "In Progress",
    acceptor: "Bob"
  },
  {
    id: 3,
    title: "My Cat Is Stuck In A Tree!",
    desc: "Help Mr. Buttons!",
    creator: "Tim",
    status: "Not Started",
    acceptor: ""
  },
  {
    id: 4,
    title: "Does Anyone Have A Spare Shovel?",
    desc: "",
    creator: "Shad",
    status: "Complete",
    acceptor: "Bob"
  }
]
const Favours = () => {

  return (
    <FavoursSection>
      <FavoursContainer>
        {favourData.map(favour => <Favour key={favour.id} {...favour}  />)}
      </FavoursContainer>
      <AddFavourBtn>Add A Favour</AddFavourBtn>
    </FavoursSection>
  )
}

export default Favours
