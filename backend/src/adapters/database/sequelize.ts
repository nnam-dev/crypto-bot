import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306, // Your MySQL port
  username: 'your_username',
  password: 'your_password',
  database: 'crypto_trading', // Your database name
});

export default sequelize;
