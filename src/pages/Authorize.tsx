import { FC, useEffect, useState } from "react";
import RequestTokenLoader from "../components/preloaders/RequestToken";
import useSession from "../store";
import { login } from "../services/authentication.service";
import { AuthFailure } from "../interfaces/services/rest.interface";

const Authorize: FC<{}> = () => {
  const params = new URLSearchParams(window.location.search);
  const approved = params.get('approved') || false;
  const requestToken = params.get('request_token') || 'invalid';
  const [cecion, setCecion] = useState<string>('')
  const [failure, setFailure ] = useState<AuthFailure>({
    failure: false,
    status_code: 0,
    status_message: '',
    success: false
  })

  const { setSession } = useSession();
  const initialStep = (approved && requestToken) ? 1 : 0

  const handleApproved = async() => {
      const loginResult = await login(requestToken)
      console.log(loginResult)
      if ( loginResult.success ){
        setSession(loginResult.session_id, 'never')
        setCecion(loginResult.session_id)
      }
  }


  useEffect(()=>{
    if (approved && requestToken){
      console.log('ainda bem')
     handleApproved()
    } 
  },[requestToken,approved])

  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const steps:string[] = ["Conceda permisos", "Validar usuario", "Paso 3"];


  if ( !approved ){
    return <RequestTokenLoader/>
  }

  return (
    <> 
    AUTORISO {cecion}
    </>
  );
};
export default Authorize;
