import Sequelize from 'sequelize';
import sequelize from '../connectionDB';

interface IDataDBModel {
    id: number;
    url: string;
    thumbnail: string;
    title: string;
    duration: number;
    folder_id: number;
}

interface IData {
    url: string;
    thumbnail: string;
    title: string;
    folder_id: number;
}

export interface DataInstance extends Sequelize.Model<IDataDBModel, IData> {};

export const Data = sequelize.define<DataInstance>('data', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    url: Sequelize.STRING,
    thumbnail: Sequelize.STRING,
    title: Sequelize.STRING,
    duration: Sequelize.NUMBER,
    folder_id: Sequelize.NUMBER
}, {
    freezeTableName: true
})
