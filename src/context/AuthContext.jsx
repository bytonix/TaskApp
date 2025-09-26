import {  createContext, useState } from "react"

export const UserContext = createContext();

const AuthContext = ({children}) => {

const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : { name: "", loggedIn: false};
  });

    
    return(<>
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    
    </>)
}

export default AuthContext