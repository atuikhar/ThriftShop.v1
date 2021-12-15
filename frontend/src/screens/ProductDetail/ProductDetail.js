import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Rating } from 'components/Rating/Rating'
import {
  Wrapper,
  CardImage,
  Cell,
  Tab,
  WrapperButton,
  Text,
  Title,
  Body,
  RatingContainer,
} from './ProductDetailsStyles'
import {
  Button,
  Grid,
  TableBody,
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
import Message from 'components/Message/Message'

const ProductDetail = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [qty, setQty] = useState(0)
  const [size, setSize] = useState(0)
  const [color, setColorWay] = useState(0)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)

  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [params, dispatch])

  const addToCart = () => {
    navigate(`/cart/${params.id}?qty=${qty}?colorWay=${color}?size=${size}`)
  }

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="warning" error={error} />
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <CardImage src={product.image} alt={product.name} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button variant="contained">
              <Text>&#x20B9; {product.price}</Text>
            </Button>
            <Title>{product.name}</Title>
            <Body>{product.description}</Body>

            <TableContainer>
              <Tab>
                <TableBody>
                  <TableRow>
                    <Cell component="th" scope="row">
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Cell>
                    <Cell align="right">
                      <RatingContainer>
                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                      </RatingContainer>
                    </Cell>
                  </TableRow>
                </TableBody>
              </Tab>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={3}>
            <TableContainer>
              <Tab>
                <TableBody>
                  {product.countInStock > 0 && product.sizes && (
                    <TableRow>
                      <Cell component="th" scope="row">
                        <Text>Size :</Text>
                      </Cell>
                      <Cell align="right">
                        <Box sx={{ minWidth: 50 }}>
                          <FormControl>
                            <InputLabel id="sizeSelect">Size</InputLabel>
                            <Select
                              labelId="sizeSelect"
                              id="size"
                              value={size}
                              label="Size"
                              onChange={(e) => setSize(e.target.value)}
                            >
                              {product.sizes.map((x) => (
                                <MenuItem key={x} value={x}>
                                  {x}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                      </Cell>
                    </TableRow>
                  )}
                  {product.countInStock > 0 && product.colorWay && (
                    <TableRow>
                      <Cell component="th" scope="row">
                        <Text>ColorWay :</Text>
                      </Cell>
                      <Cell align="right">
                        <Box sx={{ minWidth: 50 }}>
                          <FormControl>
                            <InputLabel id="colorWay">Color</InputLabel>
                            <Select
                              labelId="colorWay"
                              id="color"
                              value={color}
                              label="ColorWay"
                              onChange={(e) => setColorWay(e.target.value)}
                            >
                              {product.colorWay.map((x) => (
                                <MenuItem key={x} value={x}>
                                  {x}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                      </Cell>
                    </TableRow>
                  )}
                  {product.countInStock > 0 && (
                    <TableRow>
                      <Cell component="th" scope="row">
                        <Text>Qty :</Text>
                      </Cell>
                      <Cell align="right">
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
                      </Cell>
                    </TableRow>
                  )}
                </TableBody>
              </Tab>
            </TableContainer>
            <WrapperButton>
              <Button
                onClick={addToCart}
                variant="contained"
                disabled={product.countInStock === 0}
              >
                <Text>
                  {product.countInStock > 0 ? 'Add To Cart' : 'Out Of Stock'}
                </Text>
              </Button>
            </WrapperButton>
          </Grid>
          {/* <Grid item xs={12} md={4}></Grid>
           <Grid item xs={12} md={8}></Grid> */}
        </Grid>
      )}
    </Wrapper>
  )
}

export default ProductDetail
