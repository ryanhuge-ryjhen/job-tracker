import { Router } from "express";
const router = Router();

import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import {
  getAllJobs,
  createJob,
  getSingleJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

router.route("/").post(validateJobInput, createJob).get(getAllJobs);
router
  .route("/:id")
  .get(validateIdParam, getSingleJob)
  .patch(validateJobInput, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
