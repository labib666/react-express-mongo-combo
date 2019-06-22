const path = require('path');
const dotenvParsed = require('custom-env')
  .env(true, `${path.join(__dirname, '../../')}/environments`)
  .dotenvConfig({ silent: process.env.NODE_ENV === 'production' });

export default dotenvParsed;
