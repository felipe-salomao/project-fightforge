import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import Box from '@material-ui/core/Box'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import useStyles from './styles'
import logo from 'images/fightforge.svg'
import { Grid } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

const Teacher = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
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

  const mobileMenuId = 'primary-search-account-menu-mobile'
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={classes.grow}>
          <Box className={classes.boxTitleImg}>
            <Typography className={classes.title} variant="h6" noWrap>
              Area do professor
            </Typography>
          </Box>
          <Box className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <Box className={classes.boxTitleImg}>
            <img src={logo} alt="logo-fightforge" className={classes.imgHeader} />
            <Typography className={classes.title} variant="h6" noWrap>
              Fight Forge
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={6}>
          <Avatar />
        </Grid>
        <Grid item xs={6}>
          text
        </Grid>
        <Grid item xs={4}>
          text
        </Grid>
        <Grid item xs={8}>
          text
        </Grid>
      </Grid>
    </Box>
  )
}

export default Teacher
