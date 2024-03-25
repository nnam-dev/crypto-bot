import { DataTypes, Model } from 'sequelize';
import sequelize from '../adapters/database/sequelize';

interface TradeAttributes {
  id: number;
  exchange: string;
  pair: string;
  price: number;
  quantity: number;
}

class Trade extends Model<TradeAttributes> implements TradeAttributes {
  public id!: number;
  public exchange!: string;
  public pair!: string;
  public price!: number;
  public quantity!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Trade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    exchange: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pair: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Trade',
  }
);

export default Trade;
