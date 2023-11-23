import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import { Login, Register, Schedule } from 'views'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.root} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.schedule} element={<Schedule />} />
      </Switch>
    </BrowserRouter>
  )
}

export const routes = {
  root: '/',

  register: '/register',

  schedule: '/schedule',
}

export default Routes
