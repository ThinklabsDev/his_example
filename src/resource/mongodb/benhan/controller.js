import BenhNhan from './model';

export default {
  async getAll(req, res) {
    try {
      const data = await BenhNhan.paginate(
        {},
        {
          page: 1,
          limit: 10,
        }
      );
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  async findOne(req, res) {},
};
