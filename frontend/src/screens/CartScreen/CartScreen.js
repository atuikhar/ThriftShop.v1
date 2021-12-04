import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import Message from 'components/Message/Message'

import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableRow,
  TableCell,
  Container,
} from '@mui/material'
import {
  Img,
  ButtonContainer,
  Title,
  GridContainer,
  Wrapper,
  Form,
  Remove,
  Total,
  Subtotal,
} from './CartScreenStyles'
import { addToCart, removeFromCart } from 'actions/cartActions'

const CartScreen = () => {
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const productId = params.id

  const qty = location.search ? Number(location.search.split('=')[1][0]) : 1

  const sizes = location.search
    ? location.search.split('=')[2].split('?')[0]
    : 30

  const color = location.search ? location.search.split('=')[3] : 30

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart
  console.log(cartItems)
  useEffect(() => {
    dispatch(addToCart(productId, qty, color, sizes))
  }, [dispatch, productId, qty, color, sizes])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }
  return (
    <>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <Message type="warning" message="Cart Empty" />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <GridContainer>
              {cartItems.map((item) => (
                <Wrapper key={item.product}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Link to={`/product/${item.product}`}>
                        <Img alt={item.name} src={item.image} />
                      </Link>
                    </Grid>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Title>{item.name}</Title>
                          <Form>
                            <FormControl>
                              <InputLabel>Qty</InputLabel>
                              <Select
                                value={item.qty}
                                label="qty"
                                onChange={(e) =>
                                  dispatch(
                                    addToCart(
                                      item.product,
                                      Number(e.target.value)
                                    )
                                  )
                                }
                              >
                                {[...Array(item.countInStock).keys()].map(
                                  (x) => (
                                    <MenuItem key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </MenuItem>
                                  )
                                )}
                              </Select>
                            </FormControl>
                            <FormControl>
                              <InputLabel>Color</InputLabel>
                              <Select
                                value={item.color}
                                label="color"
                                onChange={(e) =>
                                  dispatch(
                                    addToCart(item.product, e.target.value)
                                  )
                                }
                              >
                                {item.colorWay.map((x) => (
                                  <MenuItem key={x} value={x}>
                                    {x}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <FormControl>
                              <InputLabel>Size</InputLabel>
                              <Select
                                value={item.sizes}
                                label="size"
                                onChange={(e) =>
                                  dispatch(
                                    addToCart(
                                      item.product,
                                      Number(e.target.value)
                                    )
                                  )
                                }
                              >
                                {item.size.map((x) => (
                                  <MenuItem key={x} value={x}>
                                    {x}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Form>
                          <ButtonContainer item>
                            <Button variant="contained">
                              Rs .{item.price}
                            </Button>
                            <Remove
                              onClick={() =>
                                removeFromCartHandler(item.product)
                              }
                            />
                          </ButtonContainer>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Wrapper>
              ))}
            </GridContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Subtotal>
              <Table sx={{ minWidth: 200 }}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Total>Items In Cart :</Total>
                  </TableCell>
                  <TableCell align="right">
                    <Total>
                      ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                    </Total>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Total>Total :</Total>
                  </TableCell>
                  <TableCell align="right">
                    <Total>
                      Rs.{' '}
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}
                    </Total>
                  </TableCell>
                </TableRow>
              </Table>
            </Subtotal>
            <Container
              sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}
            >
              <Button
                size="large"
                variant="contained"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Checkout
              </Button>
            </Container>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default CartScreen
