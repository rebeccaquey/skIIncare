import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ProductDetails from './ProductDetails.jsx';
import EachProduct from './EachProduct.jsx';
import AddModal from './AddModal.jsx';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 24,
  },
});

const ProductCategory = (props) => {
  const classes = useStyles();

  const categoryProducts = props.products.filter((product) => {
    return product.category === props.category.slice(0, -1);
  })

  return (
    <Card className={classes.root} style={{margin: '5px'}} variant="outlined">
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={11}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.category}
            </Typography>
          </Grid>
          <Grid item xs={1} >
            <AddModal currentModal={'Product'} category={props.category} handleAdd={props.handleAdd} />
          </Grid>
        </Grid>

       {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.category}
        </Typography> */}
        <Typography variant="h5" component="h2">
          {categoryProducts.map((product, i) => (
            <EachProduct product={product} key={i} />
          ))}
        </Typography>
        {/* <AddModal currentModal={'Product'} category={props.category} /> */}
      </CardContent>
    </Card>
  )
}

export default ProductCategory;