import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux';

import {fetchCart} from './../../actions/cart'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const CartList = () => {


    const {FETCHCART} = useSelector(state=>state);
    console.log("FETCHCARTtor--->", FETCHCART)
       const dispatch=useDispatch();

       useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch]);

    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Id</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
            {FETCHCART && FETCHCART.length>0 ?
                FETCHCART[0].products.map((cart, index)=>{
                    return(
                        <TableRow>
                            <TableCell component="th" scope="row">
                        image
                            </TableCell>
                            <TableCell>{cart.productId}</TableCell>
                            <TableCell>40</TableCell>
                            <TableCell>
                            <div className="quantity justify-content-between">
                                <span className="minus">-</span>
                                <span className="quantity-value">{cart.quantity}</span>
                                <span className="plus">+</span>
                            </div>

                            </TableCell>
                            <TableCell>Rs. 400</TableCell>
                            <TableCell align="right">X</TableCell>
                        </TableRow>
                    )
                })
            :null}

             


         
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default CartList
