import mongoose, { Schema } from "mongoose";
import { IPoll } from "./poll.interface";

const pollSchema = new Schema<IPoll>({
  question: { type: String, required: true, trim: true },
  options: [
    {
      text: { type: String, required: true },
      votes: { type: Number, default: 0 },
    },
  ],
  expiresAt: { type: Date, required: true, index: true },
  private: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Poll = mongoose.model<IPoll>("Poll", pollSchema);
