import { useState, useEffect } from "react";
import { useToken } from "../../context/AccessTokenProvider";
import axios from "axios";

export const useRefresh = () => {
  const [loading, setLoading] = useState(false);
  const {setToken} = useToken()
  useEffect(() => {
    setLoading(true)
    axios.post("/api/users/refresh_token", {}, {withCredentials: true})
    .then(res => setToken(res.data))
    .then(setLoading(false))
    .catch(err => console.log(err))
  }, [])

  return loading;
}