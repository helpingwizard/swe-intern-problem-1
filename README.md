# Command Logger API

Command Logger API is a Node.js-based backend service that allows users to log shell commands to a database and search through the logged command history. This project is designed to automatically log terminal commands to a database while also enabling users to search for specific commands by keyword.

## Features

- **Log Commands**: Automatically logs every terminal command typed by the user.
- **Search History**: Allows searching through the command history using keywords.
- **Cross-Shell Support**: Works seamlessly with Bash.
- **Persistent Storage**: Uses PostgreSQL as the database to store commands.

### Running the Project with Docker

1. Project Setup steps:
   ```bash
   https://github.com/helpingwizard/swe-intern-problem-1.git
   git checkout -b dev
   cd swe-intern-problem-1
   docker-compose up --build
   ```
