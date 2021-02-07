import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {

    Route.post("/auth/login", "AuthController.login");
    Route.get("/auth/logout", "AuthController.logout");
    Route.get("/auth/acknowledge", "AuthController.acknowledge");

    Route.post("/auth/register", "RegisterController.register");
    Route.post("/auth/register/checkCPF", "RegisterController.checkCPF");

    Route.group(() => {
        Route.resource("messages", "MessagesController").apiOnly().only(["index", "store"]);
    }).middleware("auth");

}).prefix("/api");
