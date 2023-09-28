export const getBaseURL = (project) => envsBaseUrl[project][env]

const env = process.env.REACT_APP_API || 'development'

const envsBaseUrl = {
  fightForge: {
    development: 'http://localhost:8888/',
  },
}
