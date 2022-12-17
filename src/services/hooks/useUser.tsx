import { useState, useEffect } from "react";
import useSession  from "../../store";
import { validateSession } from "../authentication.service";

export const useUser = () => {
  const { session_id } = useSession();
  const [isValid, setIsValid] = useState(false);

  const handleValidation = async(key:string) =>{
    const result = await validateSession(key)
    setIsValid(result)
  }


  useEffect(() => {
    console.log(session_id)
    if (session_id) {
      handleValidation(session_id)
    }
    if (!session_id){
      console.log('HELL NO!!',)
    }
  }, [session_id]);

  return { isValid };
}
