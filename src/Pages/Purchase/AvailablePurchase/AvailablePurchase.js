import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import PurchaseProduct from '../PurchaseProduct/PurchaseProduct';

const purchaseProducts = [
    {
        id: '1',
        name: 'Gold Bracelet',
        description: 'The gold bracelets for women are deceptively strong and flexible.It is adjustable to fit most wrist sizes.',
        img: 'https://i.ibb.co/BL7bs01/goldbracelet.jpg'
    },
    {
        id: '2',
        name: 'White Pearl Necklace',
        description: 'White pearls symbolize innocence, beauty, sincerity, and new beginnings.',
        img: 'https://i.ibb.co/Pc4CMXY/white-pearl-necklace.jpg'
    },
    {
        id: '3',
        name: 'Silver & Pearls Necklace',
        description: 'This necklace is handcrafted from sterling silver and micropaved with white zirconia stones.',
        img: 'https://i.ibb.co/pyPRPy9/Silver-necklace-chain.png'
    },
    {
        id: '4',
        name: 'Gold Ring',
        description: 'Gold ornaments and specially Gold Rings are a very common but very pure way to show your love and affection.',
        img: 'https://i.ibb.co/2PMmKXR/goldring.png'
    },
    {
        id: '5',
        name: 'Silver & Green Stone Ring',
        description: 'Green stone sterling silver vintage ring for men diamond ring. Green stones sterling silver vintage ring, small white gold plated fine jewelry.',
        img: 'https://i.ibb.co/1TYWFNp/silverring.png'
    },
    {
        id: '6',
        name: 'Mat Plastic&Silver Chain',
        description: 'Silver Pendant Necklace is proof that ocean trash can be turned into something beautiful.Necklace Chains are a versatile and classy stringing option.',
        img: 'https://i.ibb.co/yBhM1qs/matplasctic-silver-chain.png'
    }
]

const AvailablePurchase = () => {
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h5" sx={{ color: 'info.main', fontWeight: 600, my: 3 }}>Available Products</Typography>
            {purchaseSuccess && <Alert severity="success">Purchase  successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    purchaseProducts.map(purchaseProduct => <PurchaseProduct
                        key={purchaseProduct.id}
                        purchaseProduct={purchaseProduct}
                        setPurchaseSuccess={setPurchaseSuccess}
                    ></PurchaseProduct>)
                }
            </Grid>
        </Container>
    );
};

export default AvailablePurchase;