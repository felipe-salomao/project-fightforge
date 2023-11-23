import * as yup from 'yup'

export const schemaRegister = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
})

export default schemaRegister
