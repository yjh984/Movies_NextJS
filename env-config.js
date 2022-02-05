const debug = process.env.NODE_ENV !== 'production'
const name = 'Movies_NextJS'

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${name}` : '',
}