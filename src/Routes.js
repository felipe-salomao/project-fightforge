import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import { Login, Register } from 'views'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
