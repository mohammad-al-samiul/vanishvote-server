import mongoose, { Schema } from "mongoose";
import { TPoll } from "./poll.interface";

const PollSchema = new Schema<TPoll>(
  {
    question: { type: String, required: true },
    options: [
      {
        text: { type: String, required: true },
        votes: { type: Number, default: 0 },
      },
    ],
    expiresAt: { type: Date, required: true },
    showResultsAfterExpiry: { type: Boolean, default: true },
    reactions: {
      like: { type: Number, default: 0 },
      trending: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export const Poll = mongoose.model<TPoll>("Poll", PollSchema);
