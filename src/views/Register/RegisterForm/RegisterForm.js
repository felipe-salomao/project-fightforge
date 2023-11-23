import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Box, Button, TextField } from '@material-ui/core'

import * as service from 'service'
import { routes } from 'Routes'

import schemas from '../schema'
import useStyles from './styles'

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const classes = useStyles()
  const navigate = useNavigate()

  const handleRegister = () => navigate(routes.root)

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    validationSchema: schemas.schemaRegister,
    defaultValues: {
      email: '',
      senha: '',
      dataNascimento: '',
      sexo: '',
      nome: '',
      codigo: '',
    },
  })

  // const onSubmit = async (data) => {
  //   try {
  //     setLoading(true)
  //     const response = await service.fightForge.auth.register({ ...data })

  //     const accessToken = response.data.accessToken
  //     return response
  //   } catch (error) {
  //     console.log('Ocorreu algum erro! Tente novamente!')
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  return (
    <form>
      <Controller
        render={({ field }) => (
          <TextField {...field} label="Nome" type="nome" variant="outlined" fullWidth className={classes.inputs} />
        )}
        control={control}
        name="nome"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Data de Nascimento"
            type="date"
            margin="normal"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.inputs}
          />
        )}
        control={control}
        name="dataNascimento"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Sexo"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="sexo"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            error={!!errors.email}
            helperText={errors?.email?.message}
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="email"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
            error={!!errors.password}
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="password"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Confirmar senha"
            type="password"
            variant="outlined"
            margin="normal"
            error={!!errors.password}
            helperText={errors?.password?.message}
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="senha"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Código da empresa"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="codigo"
        mode="onBlur"
      />
      <Box mt={2} className={classes.actionBox}>
        <Button type="submit" variant="contained" className={classes.buttonPrimary} onClick={handleRegister}>
          Cadastre-se
        </Button>
      </Box>
    </form>
  )
}
export default RegisterForm
