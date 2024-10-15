import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("category", (table) => {
        table.increments("id").primary()
        table.string("category_name").notNullable()
        table.enu("type", ["income", "expense"]).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("category")
}

