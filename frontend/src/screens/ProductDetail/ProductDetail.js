import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Rating } from 'components/Rating/Rating'
import Typography from '@mui/material/Typography'
import { Wrapper, CardImage } from './ProductDetailsStyles'
import Button from '@mui/material/Button'

import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import { listProductDetails } from 'actions/productActions'

import Loader from 'components/Loader/Loader'
import Error from 'components/Error/Error'

const ProductDetail = () => {
  const params = useParams()

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)

  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [params, dispatch])

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
                        {product.countInStock}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="right">
                      <Button variant="contained">Add to Cart</Button>
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
