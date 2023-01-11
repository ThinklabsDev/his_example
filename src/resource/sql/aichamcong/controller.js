import sequelize from '../../../db/sql';
import AiChamCong from './model';
import DmNhanVien from '../dmnhanvien/model';
import DmPhai from '../dmphai/model';
import { Op } from 'sequelize';
import moment from 'moment';

export default {
  async getAll(req, res) {
    try {
      let { page, limit, manv, tennv, maphai, ngaythang } = req.query;
      page = parseInt(page) || 1;
      limit = parseInt(limit) || 10;
      let offset = page * limit - limit;

      const condition = {};
      const dmNhanVienCondition = {};
      if (manv) condition.manv = manv;
      if (ngaythang) {
        let start_date = moment(ngaythang, 'YYYY-MM-DD').startOf('day');
        let end_date = moment(ngaythang, 'YYYY-MM-DD').endOf('day');
        condition.ngaythang = {
          [Op.gte]: start_date,
          [Op.lte]: end_date,
        };
      }
      if (tennv)
        dmNhanVienCondition.tennv = {
          [Op.like]: `%${tennv}%`,
        };
      if (maphai) dmNhanVienCondition.maphai = maphai;

      const filter = {
        offset: offset,
        limit: limit,
        where: condition,
        order: [['ngaythang', 'DESC']],
        include: {
          model: DmNhanVien,
          attributes: ['tennv', 'maphai'],
          where: dmNhanVienCondition,
          include: {
            model: DmPhai,
            attributes: ['tenphai'],
          },
        },
      };

      const { count, rows } = await AiChamCong.findAndCountAll(filter);

      return res.json({ docs: rows, page, limit, total: count });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  },

  async getAllUseQuery(req, res) {
    try {
      const [results, metadata] = await sequelize.query('SELECT TOP 10 * FROM AiChamCong');
      return res.json({ results, metadata });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  },

  async findOne(req, res) {
    try {
      const { manv, ngaythang, chamvaongay, makk } = req.query;
      if (!manv || !ngaythang || !chamvaongay || makk)
        return res.status(500).json({ message: 'manv, ngaythang, chamvaongay, makk la bat buoc' });
      const data = await AiChamCong.findOne({
        where: {
          manv: manv,
          ngaythang: {
            [Op.gte]: moment(ngaythang, 'YYYY-MM-DD').startOf('day'),
            [Op.lte]: moment(ngaythang, 'YYYY-MM-DD').endOf('day'),
          },
          chamvaongay: chamvaongay,
          makk: makk,
        },
      });
      if (data === null) return res.status(404).json({ message: 'khong tim thay' });
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  },
};
