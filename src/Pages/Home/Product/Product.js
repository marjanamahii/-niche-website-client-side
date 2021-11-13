import { Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Product = (props) => {
    const { name, description, img } = props.product;
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
                    <Typography style={{ color: '#C08DF7' }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <NavLink to='/purchase'><Button sx={{ borderRadius: '5px', m: 2, backgroundColor: '#C08DF7', textDecoration: 'none' }} variant="contained" >Purchase</Button></NavLink>
            </Card>
        </Grid>
    );
};

export default Product;