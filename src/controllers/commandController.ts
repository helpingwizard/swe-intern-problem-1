import { Request, Response } from 'express';
import { addCommand, findCommands } from '../services/commandService';

export const storeCommand = async (req: Request, res: Response) => {
    try {
      const { command } = req.body;
  
      if (!command) {
        return res.status(400).json({ error: 'Command is required' });
      }
  
      console.log("Received command:", command);
  
      const result = await addCommand(command);
      
      res.status(201).send("Command stored. You’ll never forget this one!\n\n");
    } catch (error: any) {
      console.error("Error storing command:", error); 
      res.status(500).json({ error: error.message || 'An unexpected error occurred' });
    }
  };
  
  export const searchCommand = async (req: Request, res: Response) => {
    const { keyword } = req.query;
  
    if (!keyword) {
      return res.status(400).json({ error: 'Keyword is required' });
    }
  
    try {
      // Search commands using the searchCommands function
      const commands = await findCommands(keyword as string);  
      const commandList = commands.map(command => command.command).join('\n') + '\n';
  
      res.set('Content-Type', 'text/plain');
      res.status(200).send(commandList); 
    } catch (error: any) {
      console.error("Error searching commands:", error);
      res.status(500).json({ error: error.message || 'An unexpected error occurred' });
    }
  };
