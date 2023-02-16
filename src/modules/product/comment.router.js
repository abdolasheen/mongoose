
import { Router } from 'express'
import * as commentController from './controller/comment.js';

const router = Router();
router.post("/addComment",commentController.addComment)
router.patch("/updateComment",commentController.updateComment)
router.delete("/deleteComment",commentController.deleteComment)
router.get("/comments/:id",commentController.getCommentByID)
router.get("/getcommentswithusers",commentController.getcommentswithusers)

export default router;