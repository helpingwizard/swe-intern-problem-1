import prisma from '../utils/db';

export const createCommand = async (command: string) => {
  return await prisma.command.create({ data: { command } });
};

export const searchCommands = async (keyword: string) => {
    return await prisma.command.findMany({
      where: { 
        command: { 
          contains: keyword, 
          mode: 'insensitive' 
        } 
      },
      orderBy: { 
        createdAt: 'desc' 
      },
      select: {
        command: true, 
      },
    });
  };
  