
import React from 'react'

function useAuth() {
  const [token , setToken] = React.useState(null);

  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem("accessToken");

    if(tokenData) {
      setToken(tokenData)
    } else {
      setToken(null)
    }
  } , [])

  
  React.useEffect(() => {
    getToken();
  }, [getToken])

  return {
    token,
  }
}

export default useAuth;