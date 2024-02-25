import prisma from "../DB/db.config.js";

export const createPost = async (req, res, next) => {
  const { user_id, title, description } = req.body;

  const newPost = await prisma.post.create({
    data: {
      user_id: Number(user_id),
      title,
      description,
    },
  });

  return res.json({
    status: 200,
    message: "post created successfully",
    data: newPost,
  });
};

export const fetchPosts = async (req, res, next) => {
  const posts = await prisma.post.findMany({});
  return res.json({ status: 200, data: posts });
};

export const showPost = async (req, res, next) => {
  const postID = req.params.id;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(postID),
    },
    include: {
        user: {
            select:{
                name:true,
                email:true
            }
        }
    }
  });
  return res.json({ status: 200, data: post });
};

export const updatePost = async (req, res, next) => {
  const postID = req.params.id;
  const { user_id, title, description } = req.body;
  await prisma.post.update({
    where: {
      id: parseInt(postID),
    },
    data: {
      user_id: Number(user_id),
      title,
      description,
    },
  });
  return res.json({ status: 200, message: "post updated successfully" });
};

export const deletePost = async (req, res) => {
  const postID = req.params.id;
  await prisma.post.delete({
    where: {
      id: parseInt(postID),
    },
  });
  return res.json({ status: 200, message: "post deleted successfully" });
};
