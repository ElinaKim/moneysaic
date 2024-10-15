import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("user", (table) => {
        table.increments("id").primary()
        table.string("user_name").notNullable().unique()
        table.string("email").notNullable().unique()
        table.string("password").notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("user")
}

