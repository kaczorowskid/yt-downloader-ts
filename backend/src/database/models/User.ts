import Sequelize from 'sequelize';
import sequelize from '../connectionDB';

interface IUserDBModel {
    id: number;
    email: string;
    password: string;
    active: boolean;
    folder_id: number
}

interface IUser {
    email: string;
    password: string;
    active: boolean;
}

export interface UserInstance extends Sequelize.Model<IUserDBModel, IUser> {};

export const User = sequelize.define<UserInstance>('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING,
    active: Sequelize.BOOLEAN,
    folder_id: Sequelize.NUMBER
})