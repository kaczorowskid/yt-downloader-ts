import Sequelize from 'sequelize';
import sequelize from '../connectionDB';

interface IFoldersDBModel {
    id: number;
    title: string;
    user_id: string;
}

interface IFolders {
    // id: number
    title: string;
    user_id: string;
}

export interface FoldersInstance extends Sequelize.Model<IFoldersDBModel, IFolders> {};

export const Folders = sequelize.define<FoldersInstance>('folders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: Sequelize.STRING,
    title: Sequelize.STRING
}, {
    freezeTableName: true
})
