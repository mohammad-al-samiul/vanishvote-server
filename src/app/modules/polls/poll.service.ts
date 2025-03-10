/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from "mongoose";
import { Poll } from "./poll.model";
import { TPoll } from "./poll.interface";

// Create a new poll
const createPollIntoDB = async (payload: TPoll) => {
  return await Poll.create(payload);
};

// Get all polls
const getAllPollsFromDB = async () => {
  return await Poll.find().select("-__v");
};

// Get polls with pagination and search
const getPollsWithPagination = async (queryParams: any) => {
  const { search, page = 1, limit = 10 } = queryParams;

  const query: any = {};
  if (search) {
    query.question = { $regex: search, $options: "i" };
  }

  const skip = (parseInt(page) - 1) * parseInt(limit);
  const polls = await Poll.find(query)
    .select("-__v")
    .skip(skip)
    .limit(parseInt(limit));

  const totalCount = await Poll.countDocuments(query);

  return {
    docs: polls,
    totalDocs: totalCount,
  };
};

// Get a single poll
const getSinglePollFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid poll ID");

  const poll = await Poll.findById(id).select("-__v");
  if (!poll) {
    throw new Error("Poll not found");
  }

  return poll;
};

// Vote on a poll option
const votePollFromDB = async (pollId: string, optionIndex: number) => {
  if (!Types.ObjectId.isValid(pollId)) throw new Error("Invalid poll ID");

  const poll = await Poll.findById(pollId);
  if (!poll) {
    throw new Error("Poll not found");
  }

  if (optionIndex < 0 || optionIndex >= poll.options.length) {
    throw new Error("Invalid option index");
  }

  poll.options[optionIndex].votes += 1;
  return await poll.save();
};

// React to a poll (like or trending)
const reactToPollFromDB = async (pollId: string, type: "like" | "trending") => {
  if (!Types.ObjectId.isValid(pollId)) throw new Error("Invalid poll ID");

  const poll = await Poll.findById(pollId);
  if (!poll) {
    throw new Error("Poll not found");
  }

  poll.reactions![type] += 1;
  return await poll.save();
};

// Delete a poll
const deletePollFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid poll ID");

  const poll = await Poll.findByIdAndDelete(id).select("-__v");
  if (!poll) {
    throw new Error("Poll not found");
  }

  return poll;
};

export const PollServices = {
  createPollIntoDB,
  getAllPollsFromDB,
  getPollsWithPagination,
  getSinglePollFromDB,
  votePollFromDB,
  reactToPollFromDB,
  deletePollFromDB,
};
