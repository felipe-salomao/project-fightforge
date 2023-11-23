import { makeStyles } from '@material-ui/core'

const styles = makeStyles(() => ({
  text: {
    fontFamily: 'Koulen, sans-serif',
    fontSize: 15,
    color: 'white',
    '& .MuiIconButton-root': {
      color: 'white', // Define a cor dos ícones como branco (incluindo o ícone do menu)
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Define a cor de fundo ao passar o mouse sobre os ícones
      },
    },
  },
  addButton: {
    fontFamily: 'Koulen, sans-serif',
    color: 'white',
    fontSize: 20,
  },
  inputs: {
    '& input': {
      color: 'white', // Cor do texto de entrada
    },
    '& fieldset': {
      borderColor: 'white !important',
    },
    color: 'white !important',
  },
}))
export default styles
