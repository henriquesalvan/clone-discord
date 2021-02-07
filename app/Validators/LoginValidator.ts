import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import {rules, schema}       from "@ioc:Adonis/Core/Validator";

export default class LoginValidator {

    constructor(protected ctx: HttpContextContract) {
    }

    public schema = schema.create({
        cpf: schema.string({trim: true}, [
            rules.minLength(14),
        ]),
        password: schema.string({}, [
            rules.minLength(6),
        ]),
    });

    public messages = {};

}
