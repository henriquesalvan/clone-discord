import Message from "App/Models/Message";

export default class MessageRepository {

    public async index() {
        return Message.query().preload("user").orderBy("id", "asc").limit(30);
    }

    public async store(data) {

        const message = await this.fill(data).save();

        if (message.$isPersisted) {
            await message.preload("user");
            return message;
        }

        return false;

    }

    private fill(data, message?: Message): Message {

        message = message || new Message();

        message.message = data.message;
        message.userId = data.logged_user_id;

        return message;

    }

}
