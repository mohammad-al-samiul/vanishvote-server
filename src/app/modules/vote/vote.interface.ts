import mongoose from "mongoose";

export type TVote = {
  pollId: mongoose.Types.ObjectId;
  votedOption: string;
};
