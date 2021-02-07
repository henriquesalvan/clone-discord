import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import MessageRepository     from "App/Repositories/MessageRepository";
import MessageValidator      from "App/Validators/MessageValidator";

export default class MessagesController {

    constructor(private messageRepository: MessageRepository) {
        this.messageRepository = new MessageRepository();
    }

    public async index() {
        return {
            content: await this.messageRepository.index(), success: true
        };
    }

    public async store({request}: HttpContextContract) {

        const data = await request.validate(MessageValidator);
        const message = await this.messageRepository.store(data);

        return {content: message, success: !!message};

    }

}
