import { Types } from "mongoose";

export interface IVote {
  pollId: Types.ObjectId | string;
  votedOption: string;
  createdAt: Date;
}

export interface IVoteDTO {
  pollId: string;
  votedOption: string;
}
