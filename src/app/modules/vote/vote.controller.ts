import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { VoteServices } from "./vote.service";

const voteOnPollController = catchAsync(async (req: Request, res: Response) => {
  const { pollId, votedOption } = req.body;
  const vote = await VoteServices.voteOnPoll(pollId, votedOption);
  if (!vote)
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ success: false, message: "Invalid vote" });
  res
    .status(httpStatus.CREATED)
    .json({ success: true, message: "Vote submitted" });
});

export const VoteController = { voteOnPollController };
