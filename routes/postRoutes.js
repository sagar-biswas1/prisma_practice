import { Router } from "express";
import {
  createPost,
  fetchPosts,
  updatePost,
  showPost,
  deletePost,
} from "../Controller/PostController.js";

const router = Router();

router.post("/", createPost);
router.get("/", fetchPosts);
router.put("/:id", updatePost);
router.get("/:id", showPost);
router.delete("/:id", deletePost);

export default router;
