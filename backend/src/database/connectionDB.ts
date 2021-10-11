import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('yt-downloader-v2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})


export default sequelize;