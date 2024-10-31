import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("category").del();

    await knex("category").insert([
        { category_name: "Salary", type: "income", icon: "/icons/salary.svg" },
        { category_name: "Investments", type: "income", icon: "/icons/investment.svg" },
        { category_name: "Rental Income", type: "income", icon: "/icons/rental.svg" },
        { category_name: "Gifts", type: "income", icon: "/icons/gift.svg" },
        { category_name: "Interest Income", type: "income", icon: "/icons/interest.svg" },
        { category_name: "Refunds", type: "income", icon: "/icons/refund.svg" },

        { category_name: "Rent/Mortgage", type: "expense", icon: "/icons/rent.svg" },
        { category_name: "Utilities", type: "expense", icon: "/icons/utilities.svg" },
        { category_name: "Groceries", type: "expense", icon: "/icons/groceries.svg" },
        { category_name: "Transportation", type: "expense", icon: "/icons/car.svg" },
        { category_name: "Savings", type: "expense", icon: "/icons/savings.svg" },
        { category_name: "Dining Out", type: "expense", icon: "/icons/dining.svg" },
        { category_name: "Insurance", type: "expense", icon: "/icons/insurance.svg" },
        { category_name: "Selfcare", type: "expense", icon: "/icons/selfcare.svg" },
        { category_name: "Entertainment", type: "expense", icon: "/icons/entertainment.svg" },
        { category_name: "Pet Care", type: "expense", icon: "/icons/petcare.svg" },
        { category_name: "Clothing", type: "expense", icon: "/icons/clothing.svg" },
    ]);
}
