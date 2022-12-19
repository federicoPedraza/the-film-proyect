import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { Provider as ProviderInterface, ProviderResults } from "../../interfaces/details.interface";
import { WatchProviderStyles } from "../../theme/globalStyles";
import { Provider } from "./provider";

export const WatchProvider: FC<ProviderResults> = ({ results }) => {
    const [flatrateOptions, setFlatrateOptions] = useState<ProviderInterface[]>([])
    const [rentOptions, setRentOptions] = useState<ProviderInterface[]>([])
    const [buyOptions, setBuyOptions] = useState<ProviderInterface[]>([])
    const { providerColumn } = WatchProviderStyles()
    useEffect(() => {
        if (results?.AR?.flatrate) {
            setFlatrateOptions(results?.AR?.flatrate)
        }
        if (results?.AR?.rent) {
            setRentOptions(results?.AR?.rent)
        }
        if (results?.AR?.buy) {
            setBuyOptions(results?.AR?.buy)
        }
    }, [results])
    return (
            <Grid container style={{textAlign:'center', padding:'2rem', height: 650, overflow: 'hidden'}}>
                <Grid item xs={4} sm={4} className={providerColumn}>
                    <Typography component='h3' variant='h5'>
                        Streaming
                    </Typography>
                    <Provider provider={flatrateOptions} />
                </Grid>
                <Grid item xs={6} sm={4} className={providerColumn}>
                    <Typography component='h3' variant='h5'>
                        Rent
                    </Typography>
                    <Provider provider={rentOptions} />
                </Grid>
                <Grid item xs={4} sm={4} className={providerColumn}>
                    <Typography component='h3' variant='h5'>
                        Buy
                    </Typography>
                    <Provider provider={buyOptions} />
                </Grid>
            </Grid>
    );
}