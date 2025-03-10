import { Types } from "mongoose";

export type TVote = {
  pollId: Types.ObjectId;
  votedOption: string;
  anonymousComment: string | null;
};
