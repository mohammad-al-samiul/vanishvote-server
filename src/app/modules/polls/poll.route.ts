import express from "express";
import { PollController } from "./poll.controller";

const router = express.Router();

router.post("/create", PollController.createPoll);
router.get("/:id", PollController.getPoll);

export default router;
