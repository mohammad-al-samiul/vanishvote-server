import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { PollServices } from "./poll.service";
import httpStatus from "http-status";

const createPoll = catchAsync(async (req: Request, res: Response) => {
  const { question, options, expiresIn, privatePoll } = req.body;

  const result = await PollServices.createPollIntoDB(
    question,
    options,
    expiresIn,
    privatePoll
  );

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Poll created successfully",
    data: result,
  });
});

const getPoll = catchAsync(async (req: Request, res: Response) => {
  const pollId = req.params.id;

  const result = await PollServices.getPollById(pollId);

  if (!result) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: "Poll not found",
    });
  }

  res.status(httpStatus.OK).json({
    success: true,
    data: result,
  });
});

export const PollController = {
  createPoll,
  getPoll,
};
