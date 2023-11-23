import { useState } from 'react'
import { TextField } from '@material-ui/core'

import useStyles from './styles'

function Search({ onPesquisa }) {
  const classes = useStyles()
  const [termoPesquisa, setTermoPesquisa] = useState('')

  const handlePesquisa = (event) => {
    const novoTermo = event.target.value
    setTermoPesquisa(novoTermo)
    onPesquisa(novoTermo)
  }

  return (
    <TextField
      label="Pesquisar"
      variant="outlined"
      value={termoPesquisa}
      onChange={handlePesquisa}
      className={classes.search}
      InputLabelProps={{
        className: classes.search,
      }}
    />
  )
}

export default Search
