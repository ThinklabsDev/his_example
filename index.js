import bodyParser from 'body-parser';
import express from 'express';
import { connectMongoDB } from './src/db/mongodb/index.js';
import sequelize from './src/db/sql/index.js';
import restRouter from './src/resource/index.js';
import AiChamCong from './src/resource/sql/aichamcong/model.js';
import DmNhanVien from './src/resource/sql/dmnhanvien/model.js';
import DmPhai from './src/resource/sql/dmphai/model.js';

try {
  await sequelize.authenticate();
  console.log('connected sql');
} catch (error) {
  console.error('unable to connect to the sql:', error);
}

AiChamCong.belongsTo(DmNhanVien, { foreignKey: 'manv' });
DmNhanVien.belongsTo(DmPhai, { foreignKey: 'maphai' });

connectMongoDB();

const app = express();
const PORT = 3100;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.send(`app running on http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});

app.use('/api', restRouter);