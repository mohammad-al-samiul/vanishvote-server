import mongoose, { Schema } from "mongoose";
import { TPoll } from "./poll.interface";

const pollSchema = new Schema<TPoll>({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  private: {
    type: Boolean,
    required: true,
  },
});

export const Poll = mongoose.model<TPoll>("Poll", pollSchema);
