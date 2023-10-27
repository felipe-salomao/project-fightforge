import React from 'react'
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardMedia,
  CardActions,
  InputBase,
  Grid,
} from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'
import logo from 'images/fightforge.svg'
import gay_foto from 'images/gay.jpg'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Nome', 159, 6.0, 24, 4.0),
  createData('Idade', 237, 9.0, 37, 4.3),
  createData('Sexo', 262, 16.0, 24, 6.0),
  createData('Modalidade', 305, 3.7, 67, 4.3),
]

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
        <Grid item xs={2}>
          <Card style={{ width: '100%' }}>
            <CardMedia className={classes.media} image={gay_foto} title="gay" />
            <CardActions className={classes.formatCardActions}>
              <Button style={{ color: 'white' }}>Upload</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <TableContainer component={Paper} style={{ backgroundColor: 'black' }}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}>
          <Button style={{ color: 'white' }}>listagem de alunos</Button>
          <Button style={{ color: 'white' }}>Agenda</Button>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  )
}

export default Teacher
