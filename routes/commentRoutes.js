import { Router } from "express";
import {
  createComment,
  fetchComments,
  updateComment,
  showComment,
  deleteComment,
} from "../Controller/CommentController.js";

const router = Router();

router.post("/", createComment);
router.get("/", fetchComments);
router.put("/:id", updateComment);
router.get("/:id", showComment);
router.delete("/:id", deleteComment);

export default router;
