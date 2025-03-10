import { TPoll } from "./poll.interface";
import { Poll } from "./poll.model";
import moment from "moment";

const createPollIntoDB = async (
  question: string,
  options: string[],
  expiresIn: number,
  privatePoll: boolean
) => {
  const expiresAt = moment().add(expiresIn, "hours").toDate();

  const pollData: TPoll = {
    question,
    options,
    expiresAt,
    private: privatePoll,
  };

  const result = await Poll.create(pollData);
  return result;
};

const getPollById = async (pollId: string) => {
  const poll = await Poll.findById(pollId);
  return poll;
};

export const PollServices = {
  createPollIntoDB,
  getPollById,
};
