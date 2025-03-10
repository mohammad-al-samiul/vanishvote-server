import express from "express";
import pollRouter from "../modules/polls/poll.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/poll",
    route: pollRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
