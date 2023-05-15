import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    const prismadb: PrismaClient;
  }
}
