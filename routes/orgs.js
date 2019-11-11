const express = require("express");
const router = express.Router();

//Models
const Comment = require("../models/Comment");
const Member = require("../models/Member");

//Controllers
const CommentController = require("./controllers/comments");
const MemberController = require("./controllers/members");


//Routes

//post a comment
router.post("/:organization/comments", CommentController.postComments);

//get all comments from the organization
router.get("/:organization/comments", CommentController.getComments);

//get all soft deleted comments
router.get("/:organization/deleted-comments", CommentController.getDeletedComments);

//delete comments
router.put("/:organization/comments", CommentController.softDeleteComments);

//get all members in the organization
router.get("/:organization/members", MemberController.getMembers);

//add a new member for the organization
router.post("/:organization/members", MemberController.addMember);

module.exports = router;