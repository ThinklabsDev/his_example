import { Sequelize } from 'sequelize';
import { SQL_DB, SQL_PASSWORD, SQL_USERNAME } from '../config';

// override timezone formatting
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);
  return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

const sequelize = new Sequelize(SQL_DB, SQL_USERNAME, SQL_PASSWORD, {
  host: '10.10.20.36',
  port: 50419,
  dialect: 'mssql',
  // logging: false,
  // logging: (...msg) => console.log(msg),
  define: {
    freezeTableName: true,
  },
});

export default sequelize;
