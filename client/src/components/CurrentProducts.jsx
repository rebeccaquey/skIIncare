import React, { useState} from 'react';
import Typography from '@material-ui/core/Typography';

import Products from './Products.jsx';


const CurrentProducts = (props) => (
  <div>
    <Typography gutterBottom variant="h4" component="h2">Current Products</Typography>
    <div>
      <Products products={props.products} categories={props.categories} handleAdd={props.handleAdd} />
    </div>
  </div>
)

export default CurrentProducts;