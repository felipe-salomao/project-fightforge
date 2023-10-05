import api from 'service/api'

const fightForge = api.create('fightForge')

const login = async (data) => {
  return await fightForge.post('usuario/login', data)

  // if (response.status === 200) {
  //   const identifyResponse = await service.fightForge.users.identify()
  // }
}

const register = async (data) => {
  return await fightForge.post('usuario/cadastro', data)
}

export default { login, register }
