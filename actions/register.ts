"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
// hashear las contraseñas
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
// imoportar instancia de prisma

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Invalid Fields!",
        };
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {
            error: "Email already exists!",
        };
    }

    const user = await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        },
    });

    //TODO: Verificar el toquen del email

    return {
        success: "User Created!",
    };
};
