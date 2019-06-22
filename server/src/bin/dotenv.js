const dotenvParsed = require('custom-env')
  .env(true, `${process.cwd()}/environments`)
  .dotenvConfig({ silent: process.env.NODE_ENV === 'production' });

export default dotenvParsed;
