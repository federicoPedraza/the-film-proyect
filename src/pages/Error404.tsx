import { CallToAction } from "../components/ui/call-to-action";

const Error404 = () => {
    return (
        <CallToAction 
        title='ERROR 404'
        redirect='/'
        subtitle='Whoops! Looks like you got lost'
        redirectMessage='Click here to return home'
        />
    )
}

export default Error404