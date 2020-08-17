import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

import ProductCategory from './ProductCategory.jsx';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const Products = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{maxHeight: 525, overflow: 'auto'}} >
      <CardContent>
        {props.categories.map((category, i) => (
          <ProductCategory products={props.products} category={category} key={i} handleAdd={props.handleAdd} />
          ))}
      </CardContent>
    </div>
  )
}

export default Products;