import { makeStyles } from '@material-ui/core'

const styles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    marginTop: 55,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {},
}))
export default styles
