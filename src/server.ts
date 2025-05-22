import Fastify from "fastify";
import cors from "./plugin/cors";
import jwt from "./plugin/jwt";
import swagger from "./plugin/swagger";
import { config } from "./config";
import authRoutes from "./routes/app.route";

async function buildServer() {
  const fastify = Fastify({ logger: true });

  await fastify.register(cors);
  await fastify.register(jwt);
  await fastify.register(swagger);
  await fastify.register(authRoutes, { prefix: "/api" });

  return fastify;
}

buildServer().then((fastify) => {
  fastify.listen({ port: config.port }, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`🚀 Server running at ${address}`);
  });
});
