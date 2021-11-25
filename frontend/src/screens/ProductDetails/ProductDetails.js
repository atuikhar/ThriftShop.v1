import React, { useState, useEffect } from 'react'
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
import axios from 'axios'

const ProductDetails = () => {
  const params = useParams()

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`)

      setProduct(data)
    }
    fetchProduct()
  }, [params])

  return (
    <Wrapper>
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
                    <Typography variant="h5">{product.countInStock}</Typography>
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
    </Wrapper>
  )
}

export default ProductDetails
