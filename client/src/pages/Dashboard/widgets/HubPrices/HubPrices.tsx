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
    console.log(props, 'props here')
    const settlementPeriodList = settlementPeriodEnum;

    const [settlementPeriod, setSettlementPeriod] = useState(settlementPeriodList.DA);

    const handleChange = (event: SelectChangeEvent) => {
        props.onChangeSettlementPeriod(event.target.value);
        setSettlementPeriod(event.target.value as settlementPeriodEnum);
    };
    const dateFormat = settlementPeriod === settlementPeriodList.DA ? 'p' : 'PP'
    const data = Object.entries(props.data || {}).map((data: any, i) => ( // remove any and use desctructured properties [key, value]
       {
        name: data[0],
        x: data[1].map((prodData: any) => format(prodData.date, dateFormat)),
        y: data[1].map((prodData: any) => prodData.value),
        mode: 'line',
        connectgaps: true
       }
    ))

    console.log(data, 'res')

    return (
        <Card>
            <CardContent>
                <h1>Hub Prices</h1>
                <HeaderActions>
                    <Box sx={{ minWidth: 230 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">settlement periond</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={settlementPeriod}
                                label="Settlement periond"
                                onChange={handleChange}
                                >
                                <MenuItem value={settlementPeriodList.DA}>DA</MenuItem>
                                <MenuItem value={settlementPeriodList.MA}>MA</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </HeaderActions>
                <Plot
                    useResizeHandler={true}
                    style={{width: '100%', height: '100%', maxHeight: '300px'}}
                    data={ data }
                    layout={ layout }
      />
            </CardContent>
        </Card>
    );
}