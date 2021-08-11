import { useState } from "react"
import axios from 'axios'
import {FormContainer,
  Form,
  FormHeader,
  FormSection,
  FormLabel,
  FormInput,
  SubmitButton} from '../common/FormElems'

const Signup = () => {
  const [error, setError] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPw, setConfirmPw] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault()

    axios.post("http://localhost:3003/api/users/signup", {
      name,
      email,
      password
    })
    .then(() => console.log("success!"))
    .catch(err => console.log(err.response.data))
  }

  return (
    <FormContainer>
      <Form>
        <FormHeader>Sign Up</FormHeader>
        <FormSection>
          <FormLabel>Name:</FormLabel>
          <FormInput 
          type='text' 
          name='name' 
          value={name} 
          onChange={(e) => setName(e.target.value)}/>
        </FormSection>
        <FormSection>
          <FormLabel>Email Address:</FormLabel>
          <FormInput 
          type='email' 
          name='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}/>
        </FormSection>
        <FormSection>
          <FormLabel>Password:</FormLabel>
          <FormInput 
          type='password' 
          name='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          />
        </FormSection>
        <FormSection>
          <FormLabel>Confirm Password:</FormLabel>
          <FormInput 
          type='password' 
          name='confirmPw' 
          value={confirmPw} 
          onChange={(e) => setConfirmPw(e.target.value)}
          />
        </FormSection>
        <SubmitButton onClick={handleSignup}>Sign Up</SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default Signup
