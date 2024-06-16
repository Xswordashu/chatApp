import z from "zod";
export const userDto = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
    email: z.string({
        required_error:"Error is required",
    }).email("Not a valid email"),
    password: z.string({
        required_error:"password is required"
    }).min(6).max(126),
    status: z.string().optional().default("Hey!! there I am using whatsApp"),
})