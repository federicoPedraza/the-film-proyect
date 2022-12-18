import { useState, useEffect } from "react";
import { UserData } from "../../interfaces/services/rest.interface";
import useSession  from "../../store";
import { getUserData, validateSession } from "../authentication.service";

const AVATAR_URL = process.env.REACT_APP_AVATAR_BASE_URL

export const useUser = () => {
  const { session_id } = useSession();
  const [isValid, setIsValid] = useState<boolean>(false);
  
  const [loading, setLoading] = useState<boolean>(false)
  const [userData, setUserData ] = useState<UserData>(initialUserData)

  const handleValidation = async(key:string) =>{
    const result = await validateSession(key)
    setIsValid(result)
  }

  const handleUserData = async(key:string) =>{
    try {
      const result = await getUserData(key)
      console.log(result)
      const { id, include_adult, iso_639_1, iso_3166_1, name, username, avatar } = result
      const hashCompleteRoute:string = `${AVATAR_URL}${avatar?.gravatar?.hash}`
      setUserData({
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
      })
    } catch (error) {
      console.log(error)
      setUserData(initialUserData)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if (session_id) {
      setLoading(true)
      handleValidation(session_id)
      handleUserData(session_id)
    }
    if (!session_id){
      console.log('HELL NO!!',)
    }
  }, [session_id]);

  return { isValid, loading, userData };
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
