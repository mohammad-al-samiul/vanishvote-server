import express from "express";
import pollRouter from "../modules/polls/poll.route";
import voteRouter from "../modules/vote/vote.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/polls",
    route: pollRouter,
  },
  {
    path: "/vote",
    route: voteRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
