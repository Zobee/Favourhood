import { useState } from 'react'
import axios from 'axios'
import {FormContainer,
  Form,
  FormHeader,
  FormSection,
  FormLabel,
  FormInput,
  SubmitButton} from '../common/FormElems'
import {useHistory, Redirect} from 'react-router-dom'
import { useToken } from '../../context/AccessTokenProvider'

const Login = () => {
  const [error, setError] = useState([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const {token, setToken} = useToken()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/login", {
        email,
        password
      }, {withCredentials: true})
      setToken(res.data)
      history.push('/favours')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return ( token ? <Redirect to="/"/> :
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
