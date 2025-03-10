import moment from "moment";
import { Poll } from "../polls/poll.model";
import { Vote } from "./vote.model";

const voteOnPoll = async (pollId: string, votedOption: string) => {
  const poll = await Poll.findById(pollId);
  if (
    !poll ||
    moment().isAfter(poll.expiresAt) ||
    !poll.options.includes(votedOption)
  ) {
    return null;
  }
  return await Vote.create({ pollId, votedOption });
};

export const VoteServices = { voteOnPoll };
