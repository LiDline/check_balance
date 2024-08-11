import { sequelize } from './db';
import { syncCurrencyAddress } from './syncModels';

export default async function connectDB() {
  try {
    await sequelize.authenticate();

    await syncCurrencyAddress();
    console.log(
      `Connect to the database: ${process.env.URL_POSTGREESQL ?? 'sqlite::memory:'}`,
    );

    // await sequelize.sync({ alter: true });
  } catch (error) {
    console.log`Unable to connect to the database: ${error}`;
  }
}
