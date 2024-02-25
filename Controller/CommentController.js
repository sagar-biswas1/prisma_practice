import prisma from "../DB/db.config.js";

export const createComment = async (req, res, next) => {
  const { comment_id, comment, user_id } = req.body;

  const newComment = await prisma.comment.create({
    data: {
      user_id: Number(user_id),
      comment_id: Number(comment_id),
      comment,
    },
  });

  return res.json({
    status: 200,
    message: "Comment created successfully",
    data: newComment,
  });
};

export const fetchComments = async (req, res, next) => {
  const comments = await prisma.comment.findMany({});
  return res.json({ status: 200, data: comments });
};

export const showComment = async (req, res, next) => {
  const commentID = req.params.id;
  const comment = await prisma.comment.findUnique({
    where: {
      id: Number(commentID),
    },
    // include: {
    //     user: {
    //         select:{
    //             name:true,
    //             email:true
    //         }
    //     }
    // }
  });
  return res.json({ status: 200, data: comment });
};

export const updateComment = async (req, res, next) => {
  const commentID = req.params.id;
  const { comment_id, comment, user_id } = req.body;
  await prisma.comment.update({
    where: {
      id: parseInt(commentID),
    },
    data: {
      user_id: Number(user_id),
      comment_id: Number(comment_id),
      comment,
    },
  });
  return res.json({ status: 200, message: "comment updated successfully" });
};

export const deleteComment = async (req, res) => {
  const commentID = req.params.id;
  await prisma.comment.delete({
    where: {
      id: parseInt(commentID),
    },
  });
  return res.json({ status: 200, message: "comment deleted successfully" });
};
