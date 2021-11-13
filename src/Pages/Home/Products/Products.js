import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';

const products = [
    {
        name: 'Gold Bracelet',
        description: 'The gold bracelets for women are deceptively strong and flexible.It is adjustable to fit most wrist sizes.',
        img: 'https://i.ibb.co/BL7bs01/goldbracelet.jpg'
    },
    {
        name: 'White Pearl Necklace',
        description: 'White pearls symbolize innocence, beauty, sincerity, and new beginnings.',
        img: 'https://i.ibb.co/Pc4CMXY/white-pearl-necklace.jpg'
    },
    {
        name: 'Silver & Pearls Necklace',
        description: 'This necklace is handcrafted from sterling silver and micropaved with white zirconia stones.',
        img: 'https://i.ibb.co/pyPRPy9/Silver-necklace-chain.png'
    },
    {
        name: 'Gold Ring',
        description: 'Gold ornaments and specially Gold Rings are a very common but very pure way to show your love and affection.',
        img: 'https://i.ibb.co/2PMmKXR/goldring.png'
    },
    {
        name: 'Silver & Green Stone Ring',
        description: 'Green stone sterling silver vintage ring for men diamond ring. Green stones sterling silver vintage ring, small white gold plated fine jewelry.',
        img: 'https://i.ibb.co/1TYWFNp/silverring.png'
    },
    {
        name: 'Mat Plastic&Silver Chain',
        description: 'Silver Pendant Necklace is proof that ocean trash can be turned into something beautiful.Necklace Chains are a versatile and classy stringing option.',
        img: 'https://i.ibb.co/yBhM1qs/matplasctic-silver-chain.png'
    }
]

const Products = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2, color: '#C08DF7' }} variant="h4" component="div">
                    Our Jewellery
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product.name}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;