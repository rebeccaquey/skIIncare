import React, { useState} from 'react';
import Typography from '@material-ui/core/Typography';


const WishList = (props) => (
  <div>
    <Typography gutterBottom variant="h4" component="h2">Wish List</Typography>
    <Typography gutterBottom component="h3">{props.wishlist[0]}</Typography>
    <Typography gutterBottom component="h3">{props.wishlist[1]}</Typography>
    <Typography gutterBottom component="h3">{props.wishlist[2]}</Typography>
  </div>
)

export default WishList;