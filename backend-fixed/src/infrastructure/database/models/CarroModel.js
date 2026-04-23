import { Schema, model } from "mongoose";

const carroSchema = new Schema({
  titulo: { type: String, required: true, unique: true },
  conductor:  { type: String, required: true },
  precio: { type: Number, required: true },
  stock:  { type: Number, required: true, default: 0 },
});

export default model("Carro", carroSchema);
