import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'components/Loader/Loader'
import Message from 'components/Message/Message'
import { login } from '../../actions/cartActions'
import Form from 'components/Form/Form'
import { Box, TextField, Button, Typography } from '@mui/material'

const LoginScreen = () => {
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const submitHandler = () => {
    console.log('Submtted')
  }
  return (
    <Form>
      <Typography variant="h2">SignIn</Typography>
      <Box component="form" sx={{ minWidth: '35ch' }}>
        <form onSubmit={submitHandler}>
          <Box style={{ marginTop: 30 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box style={{ marginTop: 30 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box style={{ marginTop: 10 }}>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Box>
        </form>
        <Typography sx={{ marginTop: 10 }}>
          New Customer:
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Typography>
      </Box>
    </Form>
  )
}

export default LoginScreen
