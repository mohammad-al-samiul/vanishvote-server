import express from "express";
import { PollController } from "./poll.controller";

const pollRouter = express.Router();

pollRouter.post("/", PollController.createPoll);
pollRouter.get("/:id", PollController.getPoll);

export default pollRouter;
