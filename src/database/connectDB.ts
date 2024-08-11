import { sequelize } from './db';

export default async function connectDB() {
  try {
    await sequelize.authenticate();

    // await sequelize.sync({ alter: true });
  } catch (error) {
    console.log`Unable to connect to the database: ${error}`;
  }
}
