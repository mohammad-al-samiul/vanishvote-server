import { Types } from "mongoose";

export interface IPollOption {
  text: string;
  votes: number;
}

export interface IPoll {
  _id: Types.ObjectId;
  question: string;
  options: IPollOption[];
  expiresAt: Date;
  private: boolean;
  createdAt: Date;
}

export interface ICreatePollDTO {
  question: string;
  options: { text: string }[];
  expiresIn: number;
  privatePoll: boolean;
}
