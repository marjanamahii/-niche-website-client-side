import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ExploreProduct from './ExploreProduct';

const exploreProducts = [
    {
        name: 'Gold Bracelet',
        description: 'The gold bracelets for women are deceptively strong and flexible.It is adjustable to fit most wrist sizes.',
        price: '30000',
        img: 'https://i.ibb.co/BL7bs01/goldbracelet.jpg'
    },
    {
        name: 'White Pearl Necklace',
        description: 'White pearls symbolize innocence, beauty, sincerity, and new beginnings.',
        price: '15000',
        img: 'https://i.ibb.co/Pc4CMXY/white-pearl-necklace.jpg'
    },
    {
        name: 'Silver & Pearls Necklace',
        description: 'This necklace is handcrafted from sterling silver and micropaved with white zirconia stones.',
        price: '25000',
        img: 'https://i.ibb.co/pyPRPy9/Silver-necklace-chain.png'
    },
    {
        name: 'Gold Ring',
        description: 'Gold ornaments and specially Gold Rings are a very common but very pure way to show your love and affection.',
        price: '28000',
        img: 'https://i.ibb.co/2PMmKXR/goldring.png'
    },
    {
        name: 'Silver & Green Stone Ring',
        description: 'Green stone sterling silver vintage ring for men diamond ring. Green stones sterling silver vintage ring, small white gold plated fine jewelry.',
        price: '5000',
        img: 'https://i.ibb.co/1TYWFNp/silverring.png'
    },
    {
        name: 'Mat Plastic&Silver Chain',
        description: 'Silver Pendant Necklace is proof that ocean trash can be turned into something beautiful.Necklace Chains are a versatile and classy stringing option.',
        price: '2500',
        img: 'https://i.ibb.co/yBhM1qs/matplasctic-silver-chain.png'
    },
    {
        name: 'Diamond Bracelet',
        description: 'Green stone sterling silver vintage ring for men diamond ring. Green stones sterling silver vintage ring, small white gold plated fine jewelry.',
        price: '5000',
        img: 'https://i.ibb.co/ZS9Jm5P/diamondbracelet.png'
    },
    {
        name: 'Diamond Ring',
        description: 'Green stone sterling silver vintage ring for men diamond ring. Green stones sterling silver vintage ring, small white gold plated fine jewelry.',
        price: '5000',
        img: 'https://i.ibb.co/SXRB8BC/diamondring.png'
    },
    {
        name: 'Diamond Necklace',
        description: 'Green stone sterling silver vintage ring for men diamond ring. Green stones sterling silver vintage ring, small white gold plated fine jewelry.',
        price: '5000',
        img: 'https://i.ibb.co/1r59J3r/diamondneclace.png'
    },
    {
        name: 'Silver Earring',
        description: 'Green stone sterling silver vintage ring for men diamond ring. Green stones sterling silver vintage ring, small white gold plated fine jewelry.',
        price: '5000',
        img: 'https://i.ibb.co/BZpKSWJ/silverearrings.png'
    }
]

const ExploreProducts = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    Our Jewellery
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        exploreProducts.map(exploreProduct => <ExploreProduct
                            key={exploreProduct.name}
                            exploreProduct={exploreProduct}
                        ></ExploreProduct>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ExploreProducts;