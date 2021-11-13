import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ExploreProduct = (props) => {
    const { name, description, price, img } = props.exploreProduct;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderColor: 'grey.500', borderRadius: 2, minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '250px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {price}
                    </Typography>
                </CardContent>
                <NavLink to='/purchase'><Button style={{ textDecoration: 'none' }} sx={{ borderRadius: '5px', m: 2, backgroundColor: '#C08DF7' }} variant="contained" >Purchase</Button></NavLink>
            </Card>
        </Grid>
    );
};

export default ExploreProduct;