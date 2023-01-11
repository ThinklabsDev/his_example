import sequelize from '../../../db/sql';
import { DataTypes } from 'sequelize';

const AiChamCong = sequelize.define(
  'aichamcong',
  {
    manv: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    ngaythang: { type: DataTypes.DATE, primaryKey: true, allowNull: false },
    chamvaongay: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    giatri: { type: DataTypes.STRING },
    makk: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
  },
  {
    timestamps: false,
  }
);

export default AiChamCong;
