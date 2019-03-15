const dbConnection = (sequelize, config) => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('connection to the database established', config);
    })
    .catch(err => console.log('error connecting to the database', err));
};

export default dbConnection;
