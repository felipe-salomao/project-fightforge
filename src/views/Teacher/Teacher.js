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
import CardContent from '@material-ui/core/CardContent'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'
import logo from 'images/fightforge.svg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { useNavigate } from 'react-router-dom'
import { routes } from 'Routes'

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

  const navigate = useNavigate()

  const handleSchedule = () => navigate(routes.schedule)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
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
          <Box className={classes.boxTitleImg}>
            <img src={logo} alt="logo-fightforge" className={classes.imgHeader} />
            <Typography className={classes.title} variant="h6" noWrap>
              Fight Forge
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={2} style={{ margin: '20px 0px 20px 40px' }}>
          <Card style={{ border: 'solid #808080 3px' }}>
            <CardMedia className={classes.media} image={logo} title="logo" />
            <CardActions className={classes.formatCardActions}>
              <Button className={classes.buttonPrimary}>Upload</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8} style={{ margin: '70px 0px 60px 120px' }}>
          <div
            className={classes.title}
            style={{
              color: 'white',
              border: 'solid #808080 1px',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
            }}
          >
            Nome: {'        '}
            <span className={classes.title} style={{ color: 'white' }}>
              Lucas Eduardo Santos de Farias
            </span>
          </div>
          <div className={classes.title} style={{ color: 'white', border: 'solid #808080 1px' }}>
            Idade: {'        '}
            <span className={classes.title} style={{ color: 'white' }}>
              19 Anos
            </span>
          </div>
          <div className={classes.title} style={{ color: 'white', border: 'solid #808080 1px' }}>
            Sexo: {'        '}
            <span className={classes.title} style={{ color: 'white' }}>
              Masculino
            </span>
          </div>
          <div
            className={classes.title}
            style={{
              color: 'white',
              border: 'solid #808080 1px',
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
            }}
          >
            Modalidade: {'        '}
            <span className={classes.title} style={{ color: 'white' }}>
              Faixa Amarela
            </span>
          </div>
        </Grid>
        <Grid
          item
          xs={10}
          style={{
            backgroundColor: '#80808090',
            border: 'solid black 2px',
            borderRadius: '10px',
            margin: '40px 0px 0px 150px',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Koulen',
                fontSize: '20px',
              }}
            >
              Lembretes
            </div>
            <div style={{ height: '200px' }}>
              <Carousel style={{ height: '200px' }} responsive={responsive}>
                <div style={{ height: '200px' }}>
                  <Card style={{ height: '260px', backgroundColor: '#80808090' }}>
                    <CardContent>
                      <Typography variant="body2" component="p" style={{ color: 'white', fontFamily: 'Koulen' }}>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div style={{ height: '200px' }}>
                  <Card style={{ height: '260px', backgroundColor: '#80808090' }}>
                    <CardContent>
                      <Typography variant="body2" component="p" style={{ color: 'white', fontFamily: 'Koulen' }}>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div style={{ height: '200px' }}>
                  <Card style={{ height: '260px', backgroundColor: '#80808090' }}>
                    <CardContent>
                      <Typography variant="body2" component="p" style={{ color: 'white', fontFamily: 'Koulen' }}>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div style={{ height: '200px' }}>
                  <Card style={{ height: '260px', backgroundColor: '#80808090' }}>
                    <CardContent>
                      <Typography variant="body2" component="p" style={{ color: 'white', fontFamily: 'Koulen' }}>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Carousel>
            </div>
          </div>
          <Grid item xs={3}>
            {/* <Button className={classes.buttonFloat}>listagem de alunos</Button> */}
            <Button className={classes.buttonFloat} onClick={handleSchedule}>
              Agenda
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Carousel responsive={responsive}>
                <div>
                  <Card style={{ width: '50%', backgroundColor: '#80808090' }}>
                    <CardContent>
                      <Typography variant="body2" component="p" style={{ color: 'white', fontFamily: 'Koulen' }}>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: '50%', backgroundColor: '#80808090' }}>
                    <CardContent>
                      <Typography variant="body2" component="p" style={{ color: 'white', fontFamily: 'Koulen' }}>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: '50%', backgroundColor: '#80808090' }}>
                    <CardContent>
                      <Typography variant="body2" component="p" style={{ color: 'white', fontFamily: 'Koulen' }}>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: '50%', backgroundColor: '#80808090' }}>
                    <CardContent>
                      <Typography variant="body2" component="p" style={{ color: 'white', fontFamily: 'Koulen' }}>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Carousel>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Teacher
