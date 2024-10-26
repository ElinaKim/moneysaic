import db from "../db";

export const findUserByEmail = async (email: string) => {
    return db('user').where({ email }).first()
}
