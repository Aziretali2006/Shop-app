import React from 'react'
import { toast } from 'react-toastify';
import { requestPath } from '../api/requestPath';
import { instance } from '../configs/config';
import { Hooks } from '../hooks';

const getUser = () => instance.get(requestPath.user);

const useUser = () => {
  const [currentUser , setCurrentUser] = React.useState(null);
  const { actions } = Hooks.useLocation();
  const notifyExit = () => toast("You are exit!");

  React.useEffect(() => {
    const request = getUser();

    request
      .then(res => {
        setCurrentUser(res.data)
      })
      .catch((err) => {
        if(err.response?.status === 401) {
          setCurrentUser(undefined)
        }
      })
  }, [])

  const logOut = React.useCallback(() => {
    localStorage.clear();
    actions.goToLogin();
    setCurrentUser(undefined)
    notifyExit();
  } , [actions])

  return {
    currentUser,
    logOut
  }
}

export default useUser;
