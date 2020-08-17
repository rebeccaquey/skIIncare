import React, { useState} from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';

const ProductDetails = (props) => (
  <CardContent>
    {/* add option to edit the details?? */}
    <Typography>
      {`Purchase Date: ${moment(props.product['purchase_date']).format('MMMM DD YYYY')}`}
    </Typography>
    <Typography>
      {`Expiration Date: ${moment(props.product['expiration_date']).format('MMMM DD YYYY')}`}
    </Typography>
    <Typography>
      {`Price: ${props.product.price}`}
    </Typography>
    <Typography>
      {`Size: ${props.product.size}`}
    </Typography>
    <Typography>
      {`Status: ${props.product.status}`}
    </Typography>
    <Typography>
      {/* add option to edit the notes? */}
      {`Notes: ${props.product.notes}`}
    </Typography>
  </CardContent>
)

export default ProductDetails;