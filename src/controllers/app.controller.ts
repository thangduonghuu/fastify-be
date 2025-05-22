import { FastifyRequest, FastifyReply } from "fastify";

interface LoginBody {
  username: string;
  password: string;
}

export async function loginController(
  request: FastifyRequest<{ Body: LoginBody }>,
  reply: FastifyReply
) {
  const { username, password } = request.body;

  if (username === "admin" && password === "1234") {
    const token = await reply.jwtSign({ username });
    return reply.send({ token });
  }

  return reply.code(401).send({ message: "Invalid credentials" });
}
