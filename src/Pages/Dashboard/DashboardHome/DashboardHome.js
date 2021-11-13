import * as React from 'react';
import { Grid } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <MyOrders></MyOrders>
            </Grid>
            <Grid item xs={6}>
                <Pay></Pay>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;