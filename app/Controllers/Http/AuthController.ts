import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import LoginValidator        from "App/Validators/LoginValidator";

export default class AuthController {

    public async login({request, auth}: HttpContextContract) {

        const data = await request.validate(LoginValidator);

        const token = await auth.use("api").attempt(data.cpf, data.password, {
            expiresIn: "1 day",
        });

        return {content: token.toJSON(), success: true};

    }

    public async logout({auth}: HttpContextContract) {
        await auth.use("api").logout();
        return {content: true, success: true};
    }

    public async acknowledge({auth}: HttpContextContract) {

        if (await auth.check()) {
            const user = auth.use("api").user;
            if (user) {
                return {content: user.toJSON(), success: true};
            }
        }

        return {content: false, success: false};

    }

}
