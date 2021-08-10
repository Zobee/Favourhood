import {FormContainer,
  Form,
  FormHeader,
  FormSection,
  FormLabel,
  FormInput,
  SubmitButton} from '../common/FormElems'

const Login = () => {
  return (
    <FormContainer>
      <Form>
        <FormHeader>Log In</FormHeader>
        <FormSection>
          <FormLabel>Email Address:</FormLabel>
          <FormInput type='email' name='email'></FormInput>
        </FormSection>
        <FormSection>
          <FormLabel>Password:</FormLabel>
          <FormInput type='password' name='password'></FormInput>
        </FormSection>
        <SubmitButton>Log In</SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default Login
