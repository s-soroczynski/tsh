import React, { useState, memo } from 'react';

import {
  Grid,
  Typography,
  Card,
  Rating,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip
} from '@mui/material';
import { ProductDialog } from './ProductDialog'

import { ProductInterface } from './Product.interface'

interface ProductCardProps {
    item: ProductInterface
}

export const ProductCard = memo((props: ProductCardProps) => {
  const [open, setOpen] = useState(false)

  const { active, description, image, name, promo, rating } = props.item
  return (
    <>
      <ProductDialog
        name={ name }
        description={ description }
        image={ image }
        open={ open }
        onClose={ () => setOpen(false) }
      />
      <Grid
        item
        lg={ 3 }
        sx={{
          pb: {
            xs: 3,
            lg: 0
          },
          height: 424
        }}
      >
        <Card sx={{ maxWidth: 327, height: 400, boxShadow: 'none', bgcolor: '#fff', borderRadius: '8px', p: 0, position: 'relative' }}>
          {
            (promo && active) && <Chip
              sx={{ position: 'absolute', zIndex: 10, borderRadius: 0, top: 16, bgcolor: '#F9A52B', fontWeight: '600', color: '#fff', fontSize: 14, width: 75, height: 24 }}
              label="Promo"
            />
          }
          <Grid
            sx={{
              filter: active ? 'grayscale(0)' : 'grayscale(1)',
              opacity: active ? 1 : 0.75,
            }}
          >
            <CardMedia
              component="img"
              height="170"
              image={ image }
              alt={ name }
              data-testid="cardMedia"
            />
          </Grid>
          <CardContent sx={{ px: 2, height: 130 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: '600', fontSize: 18 }}
            >
              { name }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: '#9194A5', textOverflow: 'ellipsis', fontWeight: '600', fontSize: 14 }}
            >
              { description }
            </Typography>
          </CardContent>
          <CardActions sx={{ px: 2, pb: 0.5, mt: 'auto' }}>
            {/* TODO add custom star */}
            <Rating
              name="read-only"
              size="small"
              value={ rating }
              readOnly
            />
          </CardActions>
          <CardActions sx={{ px: 2 }}>
            <Button
              size="large"
              variant="contained"
              disabled={ !active }
              onClick={ () => setOpen(!open) }
              sx={{ width: '100%', height: 38, textTransform: 'unset' }}
            >
              { active 
                ? 'Show details'
                : 'Unavailable'
              }
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
});
ProductCard.displayName = 'ProductCard'
