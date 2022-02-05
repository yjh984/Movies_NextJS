const debug = process.env.NODE_ENV !== 'production'
const name = 'Movies_NextJs'

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${name}` : '',
}