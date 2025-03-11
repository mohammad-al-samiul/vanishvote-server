import moment from "moment";
import { Poll } from "../polls/poll.model";
import { IVoteDTO } from "./vote.interface";
import { Vote } from "./vote.model";

const voteOnPoll = async (
  pollId: string,
  votedOption: string
): Promise<IVoteDTO | null> => {
  const poll = await Poll.findById(pollId);

  if (
    !poll ||
    moment().isAfter(poll.expiresAt) ||
    !poll.options.includes(votedOption)
  ) {
    return null;
  }

  const vote = await Vote.create({ pollId, votedOption });

  // Update vote count (if options include an object with votes)
  await Poll.findByIdAndUpdate(
    pollId,
    { $inc: { [`votes.${votedOption}`]: 1 } },
    { new: true }
  );

  return {
    pollId: vote.pollId.toString(),
    votedOption: vote.votedOption,
  };
};

export const VoteServices = { voteOnPoll };
