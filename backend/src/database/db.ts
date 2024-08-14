import dotenv from 'dotenv';
import { DataTypes, Sequelize } from 'sequelize';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.URL_POSTGREESQL?.length
    ? process.env.URL_POSTGREESQL
    : 'sqlite::memory:',
  {
    logging: process.env.NODE_ENV === 'development' ? true : false,
  },
);

export const CurrencyAddress = sequelize.define(
  'CurrencyAddress',
  {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // balance: {
    //   type: DataTypes.DECIMAL(18, 8),
    //   allowNull: false,
    //   defaultValue: 0.0
    // },
    // usdt_equivalent: {
    //   type: DataTypes.DECIMAL(18, 8),
    //   allowNull: false,
    //   defaultValue: 0.0
    // }
  },
  {
    tableName: 'CurrencyAddresses',
    timestamps: false,
  },
);
