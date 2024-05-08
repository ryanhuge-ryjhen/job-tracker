import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  createJob,
  getSingleJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getSingleJob).patch(updateJob).delete(deleteJob);

export default router;
