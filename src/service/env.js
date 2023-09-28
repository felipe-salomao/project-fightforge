export const getBaseURL = (project) => envsBaseUrl[project][env]

const env = 'development'

const envsBaseUrl = {
  fightForge: {
    development: 'http://localhost:8888/',
  },
}
