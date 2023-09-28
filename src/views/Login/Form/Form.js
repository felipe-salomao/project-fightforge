import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Box, Button, TextField } from '@material-ui/core'

import * as service from 'service'

import schemas from '../schema'
import useStyles from './styles'

const Form = () => {
  const [loading, setLoading] = useState(false)
  const classes = useStyles()

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    validationSchema: schemas.schemaLogin,
    defaultValues: {
      email: '',
      senha: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      const response = await service.fightForge.auth.login({ ...data })

      // const accessToken = response.data.accessToken
      return response
    } catch (error) {
      console.log('Ocorreu algum erro! Tente novamente!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            variant="outlined"
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
            error={!!errors.senha}
            helperText={errors?.senha?.message}
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="senha"
        mode="onBlur"
      />
      <Box mt={2} className={classes.actionBox}>
        <Button type="submit" variant="contained" className={classes.buttonPrimary}>
          Acessar
        </Button>
        <divider className={classes.dividerStyle} />
        <Button type="submit" variant="contained" className={classes.buttonPrimary}>
          Cadastre-se
        </Button>
      </Box>
    </form>
  )
}
export default Form
