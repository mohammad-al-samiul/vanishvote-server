import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { VoteServices } from "./vote.service";

const voteOnPoll = catchAsync(async (req: Request, res: Response) => {
  const { pollId, votedOption, anonymousComment } = req.body;

  const result = await VoteServices.voteOnPoll(
    pollId,
    votedOption,
    anonymousComment
  );

  if (!result) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Invalid vote or poll expired",
    });
  }

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Vote submitted successfully",
  });
});

export const VoteController = {
  voteOnPoll,
};
