import mongoose, { Schema } from "mongoose";
import { TVote } from "./vote.interface";

const voteSchema = new Schema<TVote>({
  pollId: { type: Schema.Types.ObjectId, ref: "Poll", required: true },
  votedOption: { type: String, required: true },
});

export const Vote = mongoose.model<TVote>("Vote", voteSchema);
