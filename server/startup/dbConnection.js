/* eslint-disable no-console */
import Sequelize from 'sequelize';

import configSetup from '../config/config';

const env = process.env.NODE_ENV || 'development';
const config = configSetup[env];

const sequelize = new Sequelize(config);
sequelize
  .authenticate()
  .then(() => {
    console.log('connected', config);
  })
  .catch(err => console.log('error', err));

exports.sequelize = sequelize;
