import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('yt-downloader', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})


export default sequelize;