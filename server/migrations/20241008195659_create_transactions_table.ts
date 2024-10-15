import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("transaction", (table) => {
        table.increments("id").primary()
        table.decimal("amount", 10, 2).notNullable()
        table.timestamp("date").defaultTo(knex.fn.now())
        table.integer("user_id").unsigned().notNullable()
            .references("id").inTable("user")
            .onDelete('CASCADE')
        table.integer('category_id').unsigned().notNullable()
            .references("id").inTable("category")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("transaction")
}
