import { useState } from 'react'
import axios from 'axios'
import {FormContainer,
  Form,
  FormHeader,
  FormSection,
  FormLabel,
  FormInput,
  SubmitButton} from '../common/FormElems'
import {useHistory} from 'react-router-dom'

const Login = () => {
  const [error, setError] = useState([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3003/api/users/login", {
        email,
        password
      }, {withCredentials: true})
      console.log(res.data)
      //history.push('/')
    } catch (err) {
      console.log(err.response.data)
    }
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
