import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import HubPrices from './widgets/HubPrices/HubPrices';

function Dashboard() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <HubPrices />
                </Grid>
                <Grid item xs={6} md={6}>
                  Another widget
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard;