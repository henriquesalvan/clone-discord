import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import {schema}              from "@ioc:Adonis/Core/Validator";

export default class LoginValidator {

    constructor(protected ctx: HttpContextContract) {
    }

    public schema = schema.create({
        cpf: schema.string(),
        password: schema.string(),
    });

    public messages = {};

}
