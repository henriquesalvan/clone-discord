import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Message    from "App/Models/Message";
import User       from "App/Models/User";

export default class UsersMessagesSeeder extends BaseSeeder {

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

        await Message.createMany([
            {
                userId: 1,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            {
                userId: 1,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
                userId: 2,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            {
                userId: 2,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
                userId: 3,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            {
                userId: 3,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
        ]);
    }

}
