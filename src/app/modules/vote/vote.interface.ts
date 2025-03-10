import { Types } from "mongoose";

export type TVote = {
  pollId: Types.ObjectId | string;
  votedOption: string;
  anonymousComment: string | null;
};
