import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../interfaces/services/rest.interface";
import useSession  from "../../store";
import { logout as logoutRest, getUserData, validateSession } from "../authentication.service";

export const useUser = () => {
  const { session_id, setSession, user_data:cacheUserData, setUserData:setCacheUser } = useSession();
  const [loading, setLoading] = useState<boolean>(false)
  const [userData, setUserData ] = useState<UserData>(cacheUserData || initialUserData)
  const navigate = useNavigate()
  const handleUserData = async(key:string) =>{
    try {
      const result = await getUserData(key)
      const { id, include_adult, iso_639_1, iso_3166_1, name, username, avatar } = result
      const hashCompleteRoute:string = `${'https://secure.gravatar.com/avatar/'}${avatar?.gravatar?.hash}`
      const processedUser = {
        id: id,
        include_adult: include_adult,
        iso_3166_1,
        iso_639_1,
        name: name,
        username,
        avatar:{
          gravatar: {
            hash: hashCompleteRoute
          },
          tmdb: avatar?.tmdb
        }
      }
      setUserData(processedUser)
    } catch (error) {
      console.log(error)
      setUserData(initialUserData)
      setCacheUser(initialUserData)
    } finally{
      setLoading(false)
    }
  }

  const logout = async() => {
    if ( !session_id ){
      return null
    }
    try {
      const result = await logoutRest(session_id)
      if ( result.success ){
        setUserData(initialUserData)
        setSession('','')
      const delayedNav = setTimeout(() => {
          navigate('/')
      }, 5000)
        return ()=>clearTimeout(delayedNav)
      }
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    setCacheUser(userData)
  },[userData, setCacheUser])

  useEffect(() => {
    if (session_id) {
      setLoading(true)
      handleUserData(session_id)
    }
  }, [session_id, handleUserData]);

  return { loading, userData, session_id, logout, cacheUserData };
}

export const isUserValidate = async(key?: string) => {
  if (!key) return;

  return await validateSession(key);
}


const initialUserData = {
  id: 0,
  include_adult: false,
  username: '',
  name: '',
  iso_639_1: 'es',
  iso_3166_1:'AR',
  avatar: {
    gravatar:{
      hash: ''
    },
    tmdb:{
      avatar_path: ''
    }
  }
}
