import { makeStyles } from '@material-ui/core'

const styles = makeStyles(() => ({
  search: {
    width: '300px', // Define a largura da barra de pesquisa
    '& input': {
      color: 'white', // Cor do texto de entrada
    },
    '& fieldset': {
      borderColor: 'white !important',
    },
    color: 'white !important',
    fontFamily: 'Koulen, sans-serif',
  },
}))
export default styles
