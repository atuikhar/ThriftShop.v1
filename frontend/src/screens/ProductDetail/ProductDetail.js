import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Rating } from 'components/Rating/Rating'
import { Wrapper, CardImage } from './ProductDetailsStyles'
import {
  Typography,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  FormControl,
  Box,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material'

import { listProductDetails } from 'actions/productActions'

import Loader from 'components/Loader/Loader'
import Error from 'components/Error/Error'

const ProductDetail = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [qty, setQty] = useState(0)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)

  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [params, dispatch])

  const addToCart = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
  }

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardImage src={product.image} alt={product.name} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3" component="div">
              {product.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {product.description}
            </Typography>

            <TableContainer>
              <Table sx={{ minWidth: 100 }} aria-label="caption table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="right">
                      <Typography variant="h4">
                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography variant="h5">Price :</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h5">Rs. {product.price}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography variant="h5">Stock :</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h5">
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  {product.countInStock > 0 && (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography variant="h5">Qty :</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Box sx={{ minWidth: 50 }}>
                          <FormControl>
                            <InputLabel id="qtyCount">Qty</InputLabel>
                            <Select
                              labelId="qtyCount"
                              id="qtySelect"
                              value={qty}
                              label="qty"
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <MenuItem key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </MenuItem>
                                )
                              )}
                            </Select>
                          </FormControl>
                        </Box>
                      </TableCell>
                    </TableRow>
                  )}
                  <TableRow>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={addToCart}
                        variant="contained"
                        disabled={product.countInStock === 0}
                      >
                        Add to Cart
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          {/* <Grid item xs={12} md={4}></Grid>
           <Grid item xs={12} md={8}></Grid> */}
        </Grid>
      )}
    </Wrapper>
  )
}

export default ProductDetail
