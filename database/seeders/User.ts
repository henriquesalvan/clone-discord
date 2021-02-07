import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User       from "App/Models/User";

export default class UserSeeder extends BaseSeeder {

    public static settings = {
        loadApp: true
    };

    public async run() {
        await User.createMany([
            {
                name: "Luke Skywalker",
                cpf: "999.999.999-99",
                password: "secret",
            },
            {
                name: "Obi Wan Kenobi",
                cpf: "888.888.888-88",
                password: "secret",
            },
            {
                name: "Ahsoka Tano",
                cpf: "777.777.777-77",
                password: "secret",
            },
        ]);
    }

}
