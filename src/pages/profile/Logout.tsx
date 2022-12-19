import { Button, Card, CardContent, Container, Typography } from "@material-ui/core"
import { CheckCircle } from "@material-ui/icons"
import { AnimatePresence, motion } from "framer-motion"
import { CallToAction } from "../../components/ui/call-to-action"
import { useUser } from "../../services/hooks/useUser"
import { boilerplateMotion, delayedAnimation, offsetApparition } from "../../services/shared/motion.service"

const MotionTypography = motion(Typography)
const MotionContainer = motion(Container)
const Logout = () => {
    const { logout, userData, loading } = useUser()
    if (userData.id === 0) {
        return <AnimatePresence>
            <MotionContainer {...boilerplateMotion}
                transition={delayedAnimation({ delay: .5, duration: .75 })}
                variants={offsetApparition({ offsetY: "-5%" }, 0, { duration: 1 })}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '25rem', gap: '1rem' }}>
                <CheckCircle style={{ fontSize: 128, color: 'green' }} />
                <Typography component='h2' variant='h5' style={{ color: 'green' }}>User unlogged successfully</Typography>
                <MotionTypography
                    {...boilerplateMotion}
                    transition={delayedAnimation({ delay: 1, duration: 1 })}
                    variants={offsetApparition({ offsetY: "15%" }, 0, { duration: 1 })}>
                    Returning home...
                </MotionTypography>
            </MotionContainer>
        </AnimatePresence>
    }
    return (
        
        <Card>
            <CardContent>
                <Typography>Are you sure you want to leave?</Typography>
                <Button onClick={() => logout()} color="secondary" variant="contained">
                    LOGOUT
                </Button>
            </CardContent>
        </Card>
    )
}

export default Logout