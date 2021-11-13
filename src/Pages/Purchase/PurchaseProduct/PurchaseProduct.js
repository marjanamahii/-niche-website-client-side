import { Button, CardMedia, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PurchaseProductModal from '../PurchaseProductModal/PurchaseProductModal';

const PurchaseProduct = ({ purchaseProduct, setPurchaseSuccess }) => {
    const { name, description, img } = purchaseProduct;
    const [openPurchaseProduct, setOpenPurchaseProduct] = React.useState(false);
    const handlePurchaseProductOpen = () => setOpenPurchaseProduct(true);
    const handlePurchaseProductClose = () => setOpenPurchaseProduct(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '250px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div">
                        {description}
                    </Typography>
                    <Button onClick={handlePurchaseProductOpen} variant="contained">Purchase Product</Button>
                </Paper>
            </Grid>
            <PurchaseProductModal
                purchaseProduct={purchaseProduct}
                openPurchaseProduct={openPurchaseProduct}
                handlePurchaseProductClose={handlePurchaseProductClose}
                setPurchaseSuccess={setPurchaseSuccess}
            ></PurchaseProductModal>
        </>

    );
};
export default PurchaseProduct;