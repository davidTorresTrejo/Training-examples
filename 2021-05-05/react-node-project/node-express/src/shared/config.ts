import config from 'nconf';
import path from 'path';

/* Load config file from config folder */
config.argv().env().file({ file: path.resolve(__dirname, '../../config/default.json')});

export default config;