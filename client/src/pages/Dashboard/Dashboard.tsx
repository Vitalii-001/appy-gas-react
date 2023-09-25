import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useEffect, useState, useCallback } from 'react';

import HubPrices from './widgets/HubPrices/HubPrices';
// import { fetchHubPrices } from '../../services/hubPrices';
import { settlementPeriodEnum } from '../../shared/enums/settlementPeriod.enum';
import { fetchHubPrices } from '../../services/hubPrices';
import { UseRequestProcessor } from '../../api/requestProcessor';

function Dashboard() {
    const selectedPeriod = settlementPeriodEnum.DA; // get it from the dropdown
    const { Query } = UseRequestProcessor();
    const queryParams = selectedPeriod;
    
    const [hubPriceWidgetData, setHubPriceWidgetData] = useState();



    let { status, error, data: hubPrices } = Query(
        ['hubPrices', queryParams],
        () => fetchHubPrices(queryParams)
      );


    const changeSettlementPeriodHandler = useCallback((value: settlementPeriodEnum) => {
        debugger
        hubPrices = Query(
            ['hubPrices', value],
            () => fetchHubPrices(value)
          );
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <HubPrices data={hubPrices} onChangeSettlementPeriod={changeSettlementPeriodHandler} />
                </Grid>
                <Grid item xs={6} md={6}>
                  Another widget
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard;