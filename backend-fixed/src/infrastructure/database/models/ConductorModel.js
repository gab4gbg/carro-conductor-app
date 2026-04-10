import { Schema, model } from "mongoose";

const conductorSchema = new Schema({
  nombre:       { type: String, required: true, unique: true },
  nacionalidad: { type: String, required: true },
  edad:         { type: Number, required: true },
});

export default model("Conductor", conductorSchema);
