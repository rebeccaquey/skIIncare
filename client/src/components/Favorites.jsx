import React, { useState} from 'react';
import Typography from '@material-ui/core/Typography';

import Products from './Products.jsx';


const Favorites = (props) => {
  let faves = [];
  props.products.map((product) => {
    if (product.favorites) {
      faves.push(product);
    }
  })
  return (
    <div>
      <Typography gutterBottom variant="h4" component="h2">Favorites</Typography>
      <Products products={faves} categories={props.categories} handleAdd={props.handleAdd} />
    </div>
  )
}

export default Favorites;