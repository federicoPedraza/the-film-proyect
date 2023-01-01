import { FC, useEffect, useState } from "react";
import { getRequestToken } from "../../services/authentication.service";
import { CircularProgress, Container, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { CallToAction } from "../ui/call-to-action";
import { AnimatePresence, motion } from 'framer-motion';
import { boilerplateMotion, delayedAnimation, offsetApparition } from "../../services/shared/motion.service";
import { useParams } from "react-router-dom";

const MotionTypography = motion(Typography)
const MotionContainer = motion(Container)
const RequestTokenLoader: FC<{}> = () => {
  const [loading, setLoading] = useState(true);
  const [failedToken, setFailedToken] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [requestToken, setRequestToken] = useState<string>('')
  const { approved } = useParams()


  const handleRequestToken = async () => {
    setLoading(true);
    const response = await getRequestToken();
    console.log(response);
    if (response) {
      setIsSuccess(response.success)
      if (response.success) {
        setFailedToken(false)
        setRequestToken(response.request_token);
      } else{
        setFailedToken(true)
      }
    }
    const readTime = setTimeout(() => {
      setLoading(false)
    }, 1500);
    return () => { clearTimeout(readTime) }
  };

  useEffect(()=>{
    setIsSuccess(Boolean(approved))
  },[approved])

  useEffect(() => {
    if (isSuccess && requestToken) {
      const delay = setTimeout(() => {
        const url = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=https://golball-brunompedraza.vercel.app/authorize`
        window.location.replace(url);
      }, 5000)
      return () => { clearTimeout(delay) }
    }
  }, [isSuccess, requestToken])

  useEffect(() => {
    handleRequestToken();
  }, []);
  if (loading) {
    return <AnimatePresence><MotionContainer {...boilerplateMotion}
      transition={delayedAnimation({ delay: .5, duration: .75 })}
      variants={offsetApparition({ offsetY: "-5%" }, 0, { duration: 1 })} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '25rem', gap: '4rem' }}>
      <CircularProgress size={128} />
      <Typography>Validating IMdb API Token, please hold...</Typography>
    </MotionContainer></AnimatePresence>
  }
  if (failedToken) {
    return <CallToAction
      title='FAILURE'
      redirect='/'
      subtitle='There was a problem while validating the IMdb API Token. Please try again later.'
      redirectMessage='Home' />
  }
  return (
    <AnimatePresence>
      <MotionContainer {...boilerplateMotion}
        transition={delayedAnimation({ delay: .5, duration: .75 })}
        variants={offsetApparition({ offsetY: "-5%" }, 0, { duration: 1 })}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '25rem', gap: '1rem' }}>
        <CheckCircle style={{ fontSize: 128, color: 'green' }} />
        <Typography component='h2' variant='h5' style={{ color: 'green' }}>API Token validated successfully</Typography>
        {requestToken && <MotionTypography
          {...boilerplateMotion}
          transition={delayedAnimation({ delay: 1, duration: 1 })}
          variants={offsetApparition({ offsetY: "15%" }, 0, { duration: 1 })}>
          Redirecting to themoviedb
        </MotionTypography>}
      </MotionContainer>
    </AnimatePresence>
  );
};
export default RequestTokenLoader;
