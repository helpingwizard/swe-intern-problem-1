import { createCommand, searchCommands } from '../models/commandModel';

export const addCommand = async (command: string) => {
  if (command.length < 3) {
    throw new Error('Command must be at least 3 characters long');
  }
  return await createCommand(command);
};

export const findCommands = async (keyword: string) => {
  return await searchCommands(keyword);
};
