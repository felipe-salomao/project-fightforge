import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import { Login, Register, Teacher } from 'views'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher" element={<Teacher />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
