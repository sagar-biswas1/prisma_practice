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

  return res.json({ status: 200, message: "user created successfully", data:newUser });
};
