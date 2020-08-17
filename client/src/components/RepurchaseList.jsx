import React, { useState} from 'react';
import Typography from '@material-ui/core/Typography';

import Products from './Products.jsx';


const RepurchaseList = (props) => {
  let repurchase = [];
  props.products.map((product) => {
    if (product.repurchase) {
      repurchase.push(product);
    }
  })
  return (
    <div>
      <Typography gutterBottom variant="h4" component="h2">Repurchase</Typography>
      <Products products={repurchase} categories={props.categories} handleAdd={props.handleAdd} />
    </div>
  )
}

export default RepurchaseList;