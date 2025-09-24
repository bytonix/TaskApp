import React,{Children, useContext} from 'react'
import { UserContext } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {

    const {user} = useContext(UserContext)

  if(!user.loggedIn){
    return <Navigate to="/login" replace />
  }

  return children;
}

export default ProtectedRoutes