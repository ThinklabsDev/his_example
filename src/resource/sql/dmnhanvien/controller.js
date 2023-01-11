import sequelize from '../../../db/sql';
import DmPhai from '../dmphai/model';
import DmNhanVien from './model';
import { Op } from 'sequelize';

export default {
  async getAll(req, res) {
    try {
      let { page, limit, tennv, maphai } = req.query;
      page = parseInt(page) || 1;
      limit = parseInt(limit) || 10;
      let offset = page * limit - limit;

      const condition = {};
      if (tennv)
        condition.tennv = {
          [Op.like]: `%${tennv}%`,
        };
      if (maphai) condition.maphai = maphai;

      const filter = {
        offset: offset,
        limit: limit,
        where: condition,
        attributes: ['manv', 'tennv', 'maphai'],
        include: {
          model: DmPhai,
          attributes: ['tenphai'],
        },
      };

      const { count, rows } = await DmNhanVien.findAndCountAll(filter);
      return res.json({ docs: rows, page, limit, total: count });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  },

  async getAllUseQuery(req, res) {
    try {
      const [results, metadata] = await sequelize.query('SELECT TOP 10 * FROM dmnhanvien');
      return res.json({ results, metadata });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  },

  async findOne(req, res) {
    try {
      const {id} = req.params;
      const data = await DmNhanVien.findByPk(id, {
        include: DmPhai,
      });
      if (data === null) return res.status(404).json({ message: 'không tìm thấy id' });
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  },
};
