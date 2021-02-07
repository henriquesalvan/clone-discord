import User from "App/Models/User";

export default class UserRepository {

    public async store(data) {
        const user = await this.fill(data).save();
        return user.$isPersisted ? user : false;
    }

    public async cpfExists(cpf: string) {
        let user = await User.query().where("cpf", cpf).first();
        return !!(user && user.id);
    }

    private fill(data, user?: User): User {

        user = user || new User();

        user.name = data.name;
        user.cpf = data.cpf;
        user.password = data.password;

        return user;

    }

}
