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
  border: solid 0.01rem black;
  border-radius: 1.5rem;

  @media screen and (max-width: 680px){
    height: 80vh;
    width: 80vw;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: "Roboto", sans-serif;
`

export const FormHeader = styled.h1`
  font-size: 3rem;
  margin: 2rem 0;
  letter-spacing: 0.5rem;
  font-family: 'Poppins', sans-serif;
  padding-bottom: 0.5rem;
  width: fit-content;
  border-bottom: solid 0.2rem black;

  @media screen and (max-width: 680px){
    font-size: 2rem;
    width: 100%;
    text-align: center;
  }
`

export const FormSection = styled.div`
  margin: auto 0.5rem;
  display: flex;
  flex-direction: column;
`

export const FormLabel = styled.label`
  font-size: 1.1rem;
  text-indent: 0.25rem;

  @media screen and (max-width: 680px){
    font-size: 1rem;
  }
`

export const FormInput = styled.input`
  outline: none;
  border: none;
  background: none;
  border-bottom: solid 0.05rem black;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  padding: 0.25rem;
  color: #666;

  &:active, &:focus{
    background: none;
  }
  
  @media screen and (max-width: 680px){
    font-size: 1.1rem;
  }
`

export const SubmitButton = styled.button`
  height: 4rem;
  border: none;
  border-radius: 2rem;
  outline: none;
  font-family: 'Poppins', sans-serif;
  background: black;
  color: white;
  margin: auto 4rem;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover, &:focus{
    background: #FFF;
    color: #000;
  }

  @media screen and (max-width: 680px){
    font-size: 1rem;
    width: 100%;
    height: 2rem;
    margin: 1rem 0;
  }
`