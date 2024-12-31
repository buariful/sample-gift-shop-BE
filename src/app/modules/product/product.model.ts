import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";
import { COccasions, CThemes } from "./product.constants";

const ProductSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  occasion: { type: String, required: true, enum: COccasions },
  theme: { type: String, required: true, enum: CThemes },
  brand: { type: String, default: "other" },
  color: { type: String, default: "other" },
});

export const Product = model<TProduct>("Product", ProductSchema);
