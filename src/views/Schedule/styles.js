import { makeStyles } from '@material-ui/core'

const styles = makeStyles(() => ({
  tablePagination: {
    '& .MuiIconButton-root': {
      color: 'white', // Define a cor das setas como branco
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Define a cor de fundo ao passar o mouse sobre as setas
      },
    },
    '& .MuiSelect-icon': {
      color: 'white', // Define a cor do ícone do seletor de páginas como branco
    },
    color: 'white', // Define a cor do ícone do seletor de páginas como branco
  },
}))
export default styles
