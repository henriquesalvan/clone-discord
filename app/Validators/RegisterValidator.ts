import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import {rules, schema}       from "@ioc:Adonis/Core/Validator";

export default class RegisterValidator {

    constructor(protected ctx: HttpContextContract) {
    }

    public schema = schema.create({
        name: schema.string({trim: true}, [
            rules.minLength(3),
        ]),
        cpf: schema.string({trim: true}, [
            rules.minLength(14),
            rules.unique({ table: 'users', column: 'cpf' })
        ]),
        password: schema.string({trim: true}, [
            rules.minLength(6),
        ]),
    });

    public messages = {};

}