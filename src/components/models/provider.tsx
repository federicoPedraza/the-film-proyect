import { Container } from "@material-ui/core";
import { FC } from "react";
import { Provider as ProviderInterface } from "../../interfaces/details.interface";
import { ProviderDetails } from "./provider-details";

export const Provider:FC<{provider: ProviderInterface[]}> = ({provider})=>{
  
    if ( provider?.length === 0){
        return (<ProviderDetails data={{logo_path:'', provider_name:'Not available'}}/>)
    }
    return (<>
        { provider.map((data,index )=>{
            return <ProviderDetails
            key={`provider-details-${index}`} 
            data={data} />
        })}
    </>)    
}