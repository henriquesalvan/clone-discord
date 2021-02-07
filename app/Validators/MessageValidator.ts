import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import {rules, schema}       from "@ioc:Adonis/Core/Validator";

export default class MessageValidator {

    constructor(protected ctx: HttpContextContract) {
    }

    public schema = schema.create({
        message: schema.string({}, [
            rules.minLength(1),
        ]),
        logged_user_id: schema.number([
            rules.exists({table: "users", column: "id"})
        ]),
    });

    public messages = {};

}
