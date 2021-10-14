import Sequelize from 'sequelize';
import sequelize from '../connectionDB';

interface IDataDBModel {
    id: number;
    link_to_yt: string;
    image_src: string;
    title: string;
    duration: number;
    folder_id: number;
}

interface IData {
    link_to_yt: string;
    image_src: string;
    title: string;
    duration: number;
    folder_id: number;
}

export interface DataInstance extends Sequelize.Model<IDataDBModel, IData> {};

export const Data = sequelize.define<DataInstance>('data', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    link_to_yt: Sequelize.STRING,
    image_src: Sequelize.STRING,
    title: Sequelize.STRING,
    duration: Sequelize.NUMBER,
    folder_id: Sequelize.NUMBER
}, {
    freezeTableName: true
})
