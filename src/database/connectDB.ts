import { sequelize } from './db';

export default async function connectDB() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log`Unable to connect to the database: ${error}`;
  }
}
