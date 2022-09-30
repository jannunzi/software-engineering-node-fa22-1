import User from "./User";
import UserModel from "./UserModel";
import UserDaoI from "./UserDaoI";

export default class UserDao implements UserDaoI {
    async findAllUsers(): Promise<User[]> {
        console.log('find all users')
        const userMongooseModels = await UserModel.find();
        console.log('userMongooseModels', userMongooseModels);

        const userModels = userMongooseModels.map((userMongooseModel) => {
            return new User(
                userMongooseModel.username,
                userMongooseModel.password
            );
        });
        return userModels;
    }
    async findUserById(uid: string): Promise<User> {
        const userMongooseModel = await UserModel.findById(uid);
        return new User(
            userMongooseModel?.username??'',
            userMongooseModel?.password??''
        );
    }
    async createUser(user: User): Promise<User> {
        const userMongooseModel = await UserModel.create(user);
        return new User(
            userMongooseModel.username,
            userMongooseModel.password
        );
    }
    async deleteUser(uid: string):  Promise<any> {
        return await UserModel.deleteOne({_id: uid});
    }
    async updateUser(uid: string, user: User): Promise<any> {
        return await UserModel.updateOne({_id: uid}, {$set: {
                username: user.uName,
                password: user.pass
            }});
    }
}
