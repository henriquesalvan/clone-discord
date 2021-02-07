import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

export default class DefineLoggedUserId {
    public async handle({request, auth}: HttpContextContract, next: () => Promise<void>) {
        if (await auth.check()) {
            if (auth.use("api") && typeof auth.use("api").user) {
                let body = request.all();
                body.logged_user_id = await auth.use("api").user?.id;
                request.updateBody(body);
            }
        }
        await next();
    }
}
