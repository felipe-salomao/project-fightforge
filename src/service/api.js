import axios from 'axios'
import { getBaseURL } from './env'

export const create = (projectTag) => {
  let api = axios.create({ baseURL: getBaseURL(projectTag) })

  return api
}

export default { create }
