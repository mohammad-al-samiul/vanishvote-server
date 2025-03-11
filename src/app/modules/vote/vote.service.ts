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
    !poll.options.some((option) => option.text === votedOption) // ✅ Fix
  ) {
    return null;
  }

  const vote = await Vote.create({ pollId, votedOption });

  // Update the vote count correctly
  await Poll.findOneAndUpdate(
    { _id: pollId, "options.text": votedOption },
    { $inc: { "options.$.votes": 1 } },
    { new: true }
  );

  return {
    pollId: vote.pollId.toString(),
    votedOption: vote.votedOption,
  };
};

export const VoteServices = { voteOnPoll };
