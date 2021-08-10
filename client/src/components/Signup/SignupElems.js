import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  width: 40vw;
  margin: 2rem auto;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
  border: solid 1px black;
  border-radius: 1.5rem;
  box-shadow: 0.15rem 0.07rem #888;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const FormHeader = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 2rem auto;
  letter-spacing: 0.5rem;
`

export const FormSection = styled.div`
  margin: auto 0.5rem;
  display: flex;
  flex-direction: column;
`

export const FormLabel = styled.label`
`

export const FormInput = styled.input`
  outline: none;
  border: none;
  background: none;
  border-bottom: solid 0.05rem black;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`

export const SubmitButton = styled.button`
  height: 3rem;
  border: none;
  outline: none;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
  margin: 2rem;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover, &:focus{
    transform: translateY(-0.2rem);
  }
`