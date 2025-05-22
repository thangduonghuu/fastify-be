import { FastifyInstance } from "fastify";
import { loginController } from "../controllers/app.controller";

export default async function (fastify: FastifyInstance) {
  fastify.post("/login", loginController);

  fastify.get(
    "/me",
    {
      preHandler: [fastify.authenticate],
    },
    async (request) => {
      return { user: request.user };
    }
  );
}
