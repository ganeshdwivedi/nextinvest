import jwt from "jsonwebtoken";

const generateToken = (user: any) => {
  const { email, role } = user;
  const token = jwt.sign({ email, role }, process.env.JWT_SECRET!, {
    expiresIn: process.env.EXPIRES_IN,
  });
  return token;
};

export default generateToken;
