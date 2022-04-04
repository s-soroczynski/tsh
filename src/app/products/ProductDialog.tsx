import React, { memo } from 'react';

import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Dialog,
} from '@mui/material';
import { Close } from 'components/icons/Close'


export interface ProductDialogProps {
    open: boolean,
    name: string,
    description: string,
    image: string,
    onClose: () => void
}

export const ProductDialog = memo((props: ProductDialogProps) => {
  const { open, description, image, name, onClose } = props
  return (
    <Dialog
      open={ open }
      onClose={ onClose }
      maxWidth="xl"
      sx={{ borderRadius: '8px' }}
    >
      <Grid
        item
        container
        sx={{
          borderRadius: '8px',
          position: 'relative',
          height: {
            xs: 570,
            lg: 530
          },
        }}
      >
        <Card
          sx={{
            width: {
              lg: 600
            },
            boxShadow: 'none',
            bgcolor: '#fff',
            p: 0,
            position: 'relative'
          }}
        >
          <IconButton
            onClick={ onClose }
            sx={{ position: 'absolute', zIndex: 10, top: 10, right: 10, }}
          >
            <Close />
          </IconButton>
          <Grid>
            <CardMedia
              component="img"
              height="360"
              image={ image }
              alt={ name }
              data-testid="cardMedia"
            />
          </Grid>
          <CardContent sx={{ px: 2 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: '600', fontSize: 24 }}
            >
              { name }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: (theme: any) => theme.palette.grey4, textOverflow: 'ellipsis', fontWeight: '600', fontSize: 18 }}
            >
              { description }
            </Typography>
          </CardContent>
        </Card>
      </Grid> 
    </Dialog>
   
  );
});
ProductDialog.displayName = 'ProductDialog'
