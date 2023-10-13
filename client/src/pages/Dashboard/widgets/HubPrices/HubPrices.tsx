import Plot from 'react-plotly.js';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { format } from 'date-fns';

import { HeaderActions } from './styles';
import { settlementPeriodEnum } from '../../../../shared/enums/settlementPeriod.enum';
import { UseRequestProcessor } from '../../../../api/requestProcessor';
import { fetchHubPrices } from '../../../../services/hubPrices';

const layout = {
    responsive: true,
    showlegend: false,
    // height: 200,
    // width: 500,
    xaxis: {
        tickcolor: 'rgb(204,204,204)',
    },
    yaxis: {
        zeroline: false,
    },
    margin: {
        autoexpand: false,
        l: 30,
        r: 20,
        t: 10
      },
}

export default function HubPrices(props: any) { // TODO: fix any type;
    const settlementPeriodList = settlementPeriodEnum;

    const [settlementPeriod, setSettlementPeriod] = useState(settlementPeriodList.DA);

    const { Query, Mutate } = UseRequestProcessor();
    
    // const [hubPriceWidgetData, setHubPriceWidgetData] = useState();

    const { status, error, data: hubPrices, refetch } = Query(
        ['hubPrices', settlementPeriod],
        (params: any) => {
            return fetchHubPrices(settlementPeriod)
        }
    );

    const handleChange = Mutate(
        ['hubPrices'],
        (params: any) => {
            setSettlementPeriod(params.target.value as settlementPeriodEnum);
            
            return fetchHubPrices(params.target.value)
        }
        // use lazy query;
        // refetch;
        // infinitive query;
        // mutate/mutate async;

        // refetch({ }) pass query

        // fetchHubPrices(value)
    );

    const dateFormat = settlementPeriod === settlementPeriodList.DA ? 'p' : 'PP'
    const data = Object.entries(hubPrices || {}).map((data: any, i) => ( // remove any and use desctructured properties [key, value]
       {
        name: data[0],
        x: data[1].map((prodData: any) => format(prodData.date, dateFormat)),
        y: data[1].map((prodData: any) => prodData.value),
        mode: 'line',
        connectgaps: true
       }
    ));

    console.log(status, 'RESULT status');
    console.log(handleChange, 'RESULT handleChange');
    let content;

    if (status === 'loading') {
        content = ( <h2>Loading...</h2> )
    } else if (status === 'error') {
        content = (<div>{JSON.stringify((error as Error).message)}</div>)
    } else {
        content = (
            <>
                    <HeaderActions>
                        <Box sx={{ minWidth: 230 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">settlement periond</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={settlementPeriod}
                                    label="Settlement periond"
                                    onChange={(value: any) => handleChange.mutate(value)}
                                >
                                    <MenuItem value={settlementPeriodList.DA}>DA</MenuItem>
                                    <MenuItem value={settlementPeriodList.MA}>MA</MenuItem>
                                </Select>
                            </FormControl>
                            </Box>
                    </HeaderActions>
                    <Plot
                        useResizeHandler={true}
                        style={{ width: '100%', height: '100%', maxHeight: '300px' }}
                        data={data}
                        layout={layout} />
                </> 
        )    
    }

    return (
        <Card>
            <CardContent>
                <h1>Hub Prices</h1>
                {content}
            </CardContent>
        </Card>
    );
}