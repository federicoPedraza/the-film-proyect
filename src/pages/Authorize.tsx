import { FC, useEffect, useState } from "react";
import RequestTokenLoader from "../components/preloaders/RequestToken";
import useSession from "../store";
import { login } from "../services/authentication.service";
import { AuthFailure } from "../interfaces/services/rest.interface";
import { CallToAction } from "../components/ui/call-to-action";
import { CheckCircle } from "@mui/icons-material";

const Authorize: FC<{}> = () => {
  const params = new URLSearchParams(window.location.search);
  const approved = params.get('approved') || false;
  const [loading, setLoading] = useState<boolean>(true)
  const requestToken = params.get('request_token') || 'invalid';
  const [failure, setFailure ] = useState<AuthFailure>({
    failure: false,
    status_code: 0,
    status_message: '',
    success: false
  })
  const [operationResult, setOperationResult ] = useState<boolean | undefined>()

  const { session_id, setSession } = useSession();

  const handleApproved = async() => {
      const loginResult = await login(requestToken)
      if ( loginResult.success ){
        setSession(loginResult.session_id, 'never')
        setOperationResult(Boolean(loginResult.session_id))
      }
      setLoading(false)
  }


  useEffect(()=>{
    if (approved && requestToken){
     handleApproved()
    } 
  },[requestToken,approved])
  if ( operationResult ){
        return <CallToAction 
        title={ <CheckCircle style={{ fontSize: 128, color: 'green' }} />}
        redirect='/'
        subtitle='Your account was connected successfully'
        redirectMessage='Go home'
        />
  }
  if ( !approved ){
    return <RequestTokenLoader/>
  }

  if ( loading ){
    <>Loading</>
  }
  if ( operationResult === false ) {
    return ( <CallToAction 
      title='FAILURE'
      redirect='/'
      subtitle='There was a problem while connecting your account. Try again later.'
      redirectMessage='Return home'
      />
      );
    }
    return <></>
};
export default Authorize;
