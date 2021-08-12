import {useState, useContext, createContext} from 'react'

export const TokenContext = createContext()

export const useToken = () => useContext(TokenContext)

export const TokenProvider = props => {
  const [token, setToken] = useState("")

  return <TokenContext.Provider value={{token, setToken}}>
    {props.children}
  </TokenContext.Provider>
}