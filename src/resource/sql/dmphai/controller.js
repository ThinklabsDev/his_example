import sequelize from '../../../db/sql';
import DmPhai from './model';

export default {
  async getAll(req, res) {
    try {
      let { page, limit } = req.query;
      page = parseInt(page) || 1;
      limit = parseInt(limit) || 10;
      let offset = page * limit - limit;
      const filter = { offset: offset, limit: limit };
      const { count, rows } = await DmPhai.findAndCountAll(filter);
      return res.json({ docs: rows, page, limit, total: count });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  },

  async findOne(req, res) {
    try {
      const {id} = req.params;
      const data = await DmPhai.findByPk(id);
      if (data === null) return res.status(404).json({ message: 'không tìm thấy id' });
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  },
};
