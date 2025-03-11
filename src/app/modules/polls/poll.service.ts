import moment from "moment";
import { IPoll } from "./poll.interface";
import { Poll } from "./poll.model";

const createPollIntoDB = async (
  question: string,
  options: { text: string }[], // Ensure correct type
  expiresIn: number,
  privatePoll: boolean
): Promise<IPoll> => {
  const expiresAt = moment().add(expiresIn, "hours").toDate();

  const formattedOptions = options.map((option) => ({
    text: option.text,
    votes: 0,
  }));

  const result = await Poll.create({
    question,
    options: formattedOptions,
    expiresAt,
    private: privatePoll,
  });

  return result;
};

const getPollById = async (pollId: string): Promise<IPoll | null> => {
  return await Poll.findById(pollId);
};

export const PollServices = {
  createPollIntoDB,
  getPollById,
};
