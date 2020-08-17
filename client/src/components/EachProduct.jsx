import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import ProductDetails from './ProductDetails.jsx';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  title: {
    cursor: 'default',
    '&:hover': {
      color: 'green',
    }
  }
}));

const EachProduct = (props) => {
  const classes = useStyles();
  const [faveClicked, setFavorite] = useState(props.product.favorites)
  const [thumbClicked, setThumb] = useState(props.product.repurchase)
  const [expanded, setExpanded] = useState(false);

  const onFaveClick = () => {
    // update db to make item a favorite
    let newFavorite = !faveClicked;
    setFavorite(newFavorite);
    props.product.favorites = newFavorite;
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onThumbClick = () => {
    let newRepurchase = !thumbClicked;
    setThumb(newRepurchase);
    props.product.repurchase = newRepurchase;
  }

  let thumbIcon = thumbClicked ? <ThumbUpIcon style={ {color: 'green'}} /> : <ThumbUpIcon />
  let faveIcon = faveClicked ? <FavoriteIcon style={ {color: 'red'}} /> : <FavoriteIcon />

  return (
    <div>
      <span className={classes.title} onClick={handleExpandClick}>
        {props.product.item}
      </span>
      <IconButton
          aria-label="add to favorites"
          onClick={onFaveClick}
        >
          {faveIcon}
        </IconButton>
        <IconButton
          onClick={onThumbClick}
        >
          {thumbIcon}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container spacing={4} >
          <Grid item xs={12} sm={3}>
            <img src={`${props.product.photo}`} height='170' style={{border: '.1px solid #b1b1b1'}}/>
          </Grid>
          <Grid item xs={12} sm={9}>
            <ProductDetails product={props.product} />
          </Grid>
        </Grid>
      </Collapse>

    </div>
  )
}

export default EachProduct;