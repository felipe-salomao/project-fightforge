import { useState } from 'react'

import { Grid, Typography } from '@material-ui/core'

import { Search } from 'components'
import useStyles from './styles'

import logo from 'images/logo.svg'

const Header = ({ title }) => {
  const [resultadoPesquisa, setResultadoPesquisa] = useState('')
  const classes = useStyles()

  const handlePesquisa = (termo) => {
    // Aplicar lógica necessária aqui dentro

    setResultadoPesquisa(termo)
  }

  return (
    <Grid container xs={12} className={classes.root}>
      <Grid item xs={3} className={classes.title}>
        {title}
      </Grid>
      <Grid item xs={4} className={classes.search}>
        <Search onPesquisa={handlePesquisa} />
      </Grid>
      <Grid item xs={3} className={classes.logo}>
        <img src={logo} alt="logo-fightforge" />
      </Grid>
    </Grid>
  )
}

export default Header
