import { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  MenuItem,
  Menu,
} from '@mui/material'
import {
  AccountCircle,
  MoreVert as MoreIcon,
  Search as SearchIcon,
} from '@mui/icons-material'
import { FaShoppingCart } from 'react-icons/fa'
import { Search, SearchIconWrapper, StyledInputBase } from './HeaderStyles'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/profile">
          <Typography color="#1f2430">Profile</Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/account">
          <Typography color="#1f2430">Account</Typography>
        </Link>
      </MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="Cart Items" color="inherit">
          <Badge badgeContent={4} color="error">
            <Link to="/cart">
              <FaShoppingCart color="#1a1f29" />
            </Link>
          </Badge>
        </IconButton>
        <Link to="/cart">
          <Typography color="#1c212b">Cart</Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="User"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>User</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="#f3f1ef"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              ThriftShop
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="Cart Items" color="inherit">
              <Badge badgeContent={4} color="error">
                <Link to="/cart">
                  <FaShoppingCart color="#faf9f8" />
                </Link>
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="User"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}
