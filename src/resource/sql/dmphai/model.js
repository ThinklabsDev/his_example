import sequelize from '../../../db/sql';
import { DataTypes } from 'sequelize';

const DmPhai = sequelize.define(
  'dmphai',
  {
    maphai: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    tenphai: { type: DataTypes.STRING },
    maxml: { type: DataTypes.INTEGER },
    viettel: { type: DataTypes.STRING },
    macu: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

export default DmPhai;
