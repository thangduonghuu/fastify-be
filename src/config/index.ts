import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 3005,
  jwtSecret: process.env.JWT_SECRET || "default_secret",
};
