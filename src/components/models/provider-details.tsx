import { Card, CardMedia, Typography } from "@material-ui/core";
import { FC } from "react";
import { Provider } from "../../interfaces/details.interface";
import { WatchProviderStyles } from "../../theme/globalStyles";
import { getImage } from "../../utils/film-helper";

export const ProviderDetails:FC<{data: Provider}> =({data}) =>{
    const { logo_path, provider_name } = data
    const { providerDetails } = WatchProviderStyles()
    return (
    <Card className={providerDetails}>
        <Typography variant="subtitle2" component="h4">
          {provider_name}
        </Typography>
        <CardMedia 
        component="img" 
        style={{ width:70, height: 70, margin:'.35rem', borderRadius:'.75rem'}}
        image={getImage(logo_path)}/>
    </Card>
    )
}