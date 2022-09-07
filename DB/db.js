const Sequelize = require('sequelize')


module.exports = async () =>{
   
    const sequelize = new Sequelize('postgres', 'postgres', 'admin123', {
        host: 'localhost',
        dialect: 'postgres'
      })

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
