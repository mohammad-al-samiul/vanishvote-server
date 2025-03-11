import mongoose, { Schema } from "mongoose";
import { IVote } from "./vote.interface";

const voteSchema = new Schema<IVote>({
  pollId: {
    type: Schema.Types.ObjectId,
    ref: "Poll",
    required: true,
  },
  votedOption: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Vote = mongoose.model<IVote>("Vote", voteSchema);
