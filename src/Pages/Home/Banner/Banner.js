import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <img style={{ width: 1349 }} src={banner} alt="" />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Banner;