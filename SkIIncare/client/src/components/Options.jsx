import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import OptionsList from './OptionsList.jsx'
import CurrentProducts from './CurrentProducts.jsx'
import Favorites from './Favorites.jsx'
import RepurchaseList from './RepurchaseList.jsx'
import WishList from './WishList.jsx'
import ToBuy from './ToBuy.jsx'
import Alerts from './Alerts.jsx'
import ProductDetails from './ProductDetails.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  sideBar: {
    minWidth: '280px',
    // '&:hover': {
    //   color: 'green',
    //   cursor: 'pointer',
    // }
  },
}));

const Options = (props) => {
  const classes = useStyles();
  const [optionClicked, showProductList] = useState(null);

  const handleClick = (e) => {
    let detail = e.target.innerText;
    showProductList(detail);
  }

  let currentOption = <CurrentProducts categories={props.categories} products={props.products} handleAdd={props.handleAdd} />;
  if (optionClicked === 'Favorites') {
    currentOption = <Favorites categories={props.categories} products={props.products} handleAdd={props.handleAdd} />
  } else if (optionClicked === 'Repurchase List') {
    currentOption = <RepurchaseList categories={props.categories} products={props.products} handleAdd={props.handleAdd} />
  } else if (optionClicked === 'Wish List') {
    currentOption = <WishList categories={props.categories} products={props.products} wishlist={props.wishlist} />
  } else if (optionClicked === 'To Buy') {
    currentOption = <ToBuy categories={props.categories} products={props.products} />
  } else if (optionClicked === 'Alerts') {
    currentOption = <Alerts categories={props.categories} alerts={props.alerts} products={props.products} handleAdd={props.handleAdd} />
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={2} className={classes.sideBar} style={{opacity: 0.8}} >
          <Paper className={classes.paper}>{props.options.map((category, i) => (
            <OptionsList handleClick={handleClick} category={category} key={i} />
          )) }</Paper>
        </Grid>
        <Grid item xs={12} sm={8} style={{opacity: 0.93}} >
          <Paper className={classes.paper} style={{maxHeight: 740, overflow: 'auto'}}>{currentOption}</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Options;