import axios from 'axios'
import { useState, useEffect } from 'react'
import { useToken } from '../../context/AccessTokenProvider'

const User = () => {
  const {token} = useToken()
  const [data, setData] = useState(null)
  useEffect(() => {
    console.log("TOKEN", token)
    axios.get("http://localhost:3003/api/users/userData", {
      headers : {
        'auth-token': token
      }
    })
    .then(res => setData(res.data))
    .then(console.log("DATA: ", data))
  },[])
  return (
    <div>
      {data ? <h1>Hello {data.name} | {data.email}</h1> : <h1>Access Denied</h1>}
    </div>
  )
}

export default User
