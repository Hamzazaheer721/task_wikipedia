/*eslint-disable */
const rewireAlias = require('react-app-rewire-alias')

module.exports = function override(config) {
  return rewireAlias.alias({
    components: 'src/components',
  })(config)
}
