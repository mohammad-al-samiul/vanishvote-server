import moment from "moment";
import { Poll } from "../polls/poll.model";
import { TVote } from "./vote.interface";
import { Vote } from "./vote.model";

const voteOnPoll = async (
  pollId: string,
  votedOption: string,
  anonymousComment: string | null
) => {
  const poll = await Poll.findById(pollId);

  if (!poll) {
    return null; // Poll not found
  }

  if (moment().isAfter(poll.expiresAt)) {
    return null; // Poll expired
  }

  if (!poll.options.includes(votedOption)) {
    return null; // Invalid vote option
  }

  const voteData: TVote = {
    pollId,
    votedOption,
    anonymousComment,
  };

  const vote = await Vote.create(voteData);
  return vote;
};

export const VoteServices = {
  voteOnPoll,
};
