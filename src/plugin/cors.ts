import fp from "fastify-plugin";
import cors from "@fastify/cors";
import { FastifyInstance } from "fastify";

export default fp(async (fastify: FastifyInstance) => {
  fastify.register(cors, { origin: "*" });
});
