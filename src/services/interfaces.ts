import Module from "module"
import { z } from "zod"

const productInCartSchema  = z.object({
    name: z.string(),
    description: z.string(),
    value: z.number(),
    discount: z.number().optional(),
    store_quantity: z.number(),
    main_images: z.string().array(),
    thumb_images: z.string().array(),
    quantity: z.number()
})

const productSchema = productInCartSchema.omit({
    quantity: true
})


export type Product = z.infer<typeof productSchema>
export type TCartProduct = z.infer<typeof productInCartSchema>