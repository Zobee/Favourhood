import { useState } from "react"
import {FormContainer,
  Form,
  FormHeader,
  FormSection,
  FormLabel,
  FormInput,
  SubmitButton} from '../common/FormElems'

const Signup = () => {
  return (
    <FormContainer>
      <Form>
        <FormHeader>Sign Up</FormHeader>
        <FormSection>
          <FormLabel>Name:</FormLabel>
          <FormInput type='text' name='name'></FormInput>
        </FormSection>
        <FormSection>
          <FormLabel>Email Address:</FormLabel>
          <FormInput type='email' name='email'></FormInput>
        </FormSection>
        <FormSection>
          <FormLabel>Password:</FormLabel>
          <FormInput type='password' name='password'></FormInput>
        </FormSection>
        <FormSection>
          <FormLabel>Confirm Password:</FormLabel>
          <FormInput type='password' name='confirmPw'></FormInput>
        </FormSection>
        <SubmitButton>Sign Up</SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default Signup
