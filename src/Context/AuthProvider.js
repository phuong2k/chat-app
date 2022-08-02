import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import {Spin} from 'antd';

export const AuthContext = React.createContext();

export default function AuthProvider({children}){

    const [user, setUser]=useState({});
    const history = useNavigate();
    const [isLoading, setLoading] = useState(true)

    React.useEffect(()=>{
        const unsubscribed = auth.onAuthStateChanged((user) => {
          if (user) {
            const { displayName, email, uid, photoURL } = user;
            setUser({
              displayName,
              email,
              uid,
              photoURL,
            });
              setLoading(false)
              history('/')
              return;
            };
            setUser({})
            setLoading(false)
            history('/login');
          });
        return () =>{
            unsubscribed();
        }
    }, [history])

      return (
        <AuthContext.Provider value={{user}}>
          { isLoading ? <Spin/> : children}
        </AuthContext.Provider>
      )
}