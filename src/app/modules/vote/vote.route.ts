import express from "express";
import { VoteController } from "./vote.controller";

const voteRouter = express.Router();

voteRouter.post("/", VoteController.voteOnPollController);

export default voteRouter;
