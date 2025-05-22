import fp from "fastify-plugin";
import jwt from "@fastify/jwt";
import { config } from "../config";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default fp(async (fastify: FastifyInstance) => {
  fastify.register(jwt, { secret: config.jwtSecret });

  fastify.decorate(
    "authenticate",
    async function (request: FastifyRequest, reply: FastifyReply) {
      try {
        await request.jwtVerify();
      } catch (err) {
        reply.send(err);
      }
    }
  );
});
