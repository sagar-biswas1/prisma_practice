import prisma from "../DB/db.config.js";

export const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.json({ status: 400, message: "user already exist" });
  }

  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      password,
    },
  });

  return res.json({
    status: 200,
    message: "user created successfully",
    data: newUser,
  });
};

export const fetchUsers = async (req, res, next) => {
  const users = await prisma.user.findMany({
    include:{
      // post: true,
      post:{
        select:{
          title: true,
          comment_count:true
        }
      }
    },
    // select:{
      
    //   _count:{
    //     select:{
    //       post: true
    //     }
    //   }
    // }
  });
  return res.json({ status: 200, data: users });
};

export const showUser = async (req, res, next) => {
  const userID = req.params.id;
  const user = await prisma.user.findUnique({
    where:{
      id:Number(userID),
    }
  });
  return res.json({ status: 200, data: user });
};

export const updateUser = async (req, res, next) => {
  const userID = req.params.id;
  const { name, email, password } = req.body;
  await prisma.user.update({
    where: {
      id: parseInt(userID),
    },
    data: {
      name,
      email,
      password,
    },
  });
  return res.json({ status: 200, message:"user updated successfully" })
};



export const deleteUser = async (req, res) => {
  const userID = req.params.id;
  await prisma.user.delete({
    where:{
      id: parseInt(userID),
    }
  })
  return res.json({ status: 200, message:"user deleted successfully" })
}