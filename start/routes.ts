import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {

    Route.post("/auth/login", "AuthController.login");
    Route.get("/auth/logout", "AuthController.logout");
    Route.get("/auth/acknowledge", "AuthController.acknowledge");

}).prefix("/api");
