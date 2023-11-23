import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import { Login, Register, Schedule, Teacher } from 'views'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.root} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.schedule} element={<Schedule />} />
        <Route path={routes.teacher} element={<Teacher />} />
      </Switch>
    </BrowserRouter>
  )
}

export const routes = {
  root: '/',

  register: '/register',

  schedule: '/schedule',

  teacher: '/teacher',
}

export default Routes
