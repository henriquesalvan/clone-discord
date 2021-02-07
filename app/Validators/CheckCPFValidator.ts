import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import {rules, schema}       from "@ioc:Adonis/Core/Validator";

export default class CheckCPFValidator {

    constructor(protected ctx: HttpContextContract) {
    }

    public schema = schema.create({
        cpf: schema.string({}, [
            rules.minLength(14),
        ]),
    });

    public messages = {};

}
