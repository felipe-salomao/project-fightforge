import { makeStyles } from '@material-ui/core'

const styles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Koulen, sans-serif',
    color: 'white',
    fontSize: 45,
    textAlign: 'center',
  },
  logo: {
    textAlign: 'center',
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
export default styles
