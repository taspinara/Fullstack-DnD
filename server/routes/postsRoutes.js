import { Router } from "express";
import { getAllPosts, getPostsById, createPost, updatePost, deletePost } from "../controllers/postsController.js";

const router = Router();

router.get("/", getAllPosts);

router.get("/:id", getPostsById);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;