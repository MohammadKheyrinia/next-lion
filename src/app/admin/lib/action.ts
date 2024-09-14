"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const ProductSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    price: z.string().min(1),
});

export const saveProduct = async (prevState: any, formData: FormData) => {
    const validatedFields = ProductSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.product.create({
            data: {
                name: validatedFields.data.name,
                description: validatedFields.data.description,
                price: validatedFields.data.price,
            },
        });

    } catch (error) {
        return { message: "Failed to create new product" };
    }

    revalidatePath("//admin/product");
    redirect("//admin/product");
};

export const getProductlist = async (query: string) => {
    try {
        const products = await prisma.product.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                // imagePath: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return products;
    } catch (error) {
        throw new Error("Failed to fetch products data");
    }
};

export const getData = async (query: string) => {
    try {
        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: query,
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return products;
    } catch (error) {
        throw new Error("Failed to fetch products data");
    }
};

export const getProductById = async (id: string) => {
    try {
        const product = await prisma.product.findUnique({
            where: { id },
        });
        return product;
    } catch (error) {
        throw new Error("Failed to fetch contact data");
    }
};

export const updateProduct = async (
    id: string,
    prevState: any,
    formData: FormData
) => {
    const validatedFields = ProductSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.product.update({
            data: {
                name: validatedFields.data.name,
                description: validatedFields.data.description,
                price: validatedFields.data.price,
                // imagePath: validatedFields.data.imagePath,
            },
            where: { id },
        });
    } catch (error) {
        return { message: "Failed to update product" };
    }

    revalidatePath("/admin/product");
    redirect("/admin/product");
};

export const deleteProduct = async (id: string) => {
    try {
        await prisma.product.delete({
            where: { id },
        });
    } catch (error) {
        return { message: "Failed to delete product" };
    }

    revalidatePath("/admin/product");
}
