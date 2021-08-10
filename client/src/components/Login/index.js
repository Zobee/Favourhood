import { useState } from 'react'
import {FormContainer,
  Form,
  FormHeader,
  FormSection,
  FormLabel,
  FormInput,
  SubmitButton} from '../common/FormElems'

const Login = () => {
  const [error, setError] = useState([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
    <FormContainer>
      <Form>
        <FormHeader>Log In</FormHeader>
        <FormSection>
          <FormLabel>Email Address:</FormLabel>
          <FormInput 
          type='email' 
          name='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          />
        </FormSection>
        <FormSection>
          <FormLabel>Password:</FormLabel>
          <FormInput 
          type='password' 
          name='password'
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
        </FormSection>
        <SubmitButton onClick={handleLogin}>Log In</SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default Login
