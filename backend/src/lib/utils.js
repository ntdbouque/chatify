import jwt from 'jsonwebtoken';
import { ENV } from "./env.js";

export const generateToken = (user, res) => {
  const token = jwt.sign(
    { id: user._id },
    ENV.JWT_SECRET,
    { expiresIn: '7d' }
  );
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: ENV.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  
  return token;
};