import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import UserRepository        from "App/Repositories/UserRepository";
import CheckCPFValidator     from "App/Validators/CheckCPFValidator";
import RegisterValidator     from "App/Validators/RegisterValidator";

export default class RegisterController {

    constructor(private userRepository: UserRepository) {
        this.userRepository = new UserRepository();
    }

    public async register({request}: HttpContextContract) {

        const data = await request.validate(RegisterValidator);
        const user = await this.userRepository.store(data);

        return {content: user, success: !!user};

    }

    public async checkCPF({request}: HttpContextContract) {

        const data = await request.validate(CheckCPFValidator);
        const exists = await this.userRepository.cpfExists(data.cpf);

        return {content: {exists: exists}, success: true};

    }

}
