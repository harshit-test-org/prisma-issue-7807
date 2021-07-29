import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const data = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      _count: {
        select: {
          following: true,
          followers: true,
        },
      },
    },
  });
  console.log(data);
  prisma.$disconnect();
}

main();
