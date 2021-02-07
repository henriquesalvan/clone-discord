import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Messages extends BaseSchema {
    protected tableName = "messages";

    public async up() {
        this.schema.createTable(this.tableName, (table) => {

            table.increments("id");
            table.timestamps(true);

            table.text("message").notNullable();
            table.integer("user_id").unsigned().index().notNullable();
            table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");

        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
