import z from "zod";

export const PurchaseFormSchema = z.object({
    id: z.string(),
    name: z.string(),
    quantity: z.number(),
    size: z.number(),
    value: z.number(),
    images: z.array(z.object({url: z.string()}))
})

export type PurchaseForm = z.infer<typeof PurchaseFormSchema>