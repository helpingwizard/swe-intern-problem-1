# Command Logger API

Command Logger API is a Node.js backend service that automatically logs shell commands typed in the terminal to a PostgreSQL database. It also provides an API to search through the logged commands by keyword. The service can be used with different shell environments like Bash and Zsh.

This project uses Docker for containerization, Prisma ORM for database management, and PostgreSQL for persistent data storage.

---

## Features

- **Log Shell Commands**: Automatically stores commands typed in the terminal.
- **Search Command History**: Allows users to search through their command history using a keyword.
- **Cross-Shell Support**: Works with Bash, Zsh, and similar shells.
- **Persistent Storage**: Stores command history in PostgreSQL, ensuring data is not lost when the terminal session ends.
- **Easy Setup**: Uses Docker and Docker Compose for seamless setup and deployment.

---

## Installation

### Prerequisites
Before setting up the project, make sure you have the following installed:

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/) (for local development without Docker)

### Running the Project with Docker

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/command-logger.git
   cd command-logger
   ```

2. Create a `.env` file with the necessary environment variables:
   ```bash
   cp .env.example .env
   ```

3. Start the services using `docker-compose`:
   ```bash
   docker-compose up --build
   ```

4. The API will be running at `http://localhost:8080`.

---

## API Endpoints

### Store a Command

Logs a command to the database.

**POST** `/api/v1/commands`

#### Example Request
```bash
curl -X POST http://localhost:8080/api/v1/commands -d "command=ls -l"
```

#### Example Response
```plaintext
Command stored. You’ll never forget this one!
```

---

### Search Commands

Search for commands in the database by a given keyword.

**GET** `/api/v1/commands?keyword=<search-term>`

#### Example Request
```bash
curl -X GET "http://localhost:8080/api/v1/commands?keyword=ls"
```

#### Example Response
```plaintext
ls -al
ls -l
```

---

## Automatic Command Logging in the Shell

To automatically log every command typed in the terminal:

1. **Install the logging script**:
   - For **Bash**, place the `log_command.sh` script in a location like `/usr/local/bin/`.
   - For **Zsh**, the same applies.

2. **Configure your shell**:
   - Add this line to your `.bashrc` or `.zshrc`:
   ```bash
   source /usr/local/bin/log_command.sh
   ```

3. **Reload your shell configuration**:
   - For **Bash**:
     ```bash
     source ~/.bashrc
     ```
   - For **Zsh**:
     ```bash
     source ~/.zshrc
     ```

Now, every command you type in your terminal will automatically be logged to the API, which stores it in the database.

---

## Project Structure

```
📂 command-logger
├── 📂 src
│   ├── 📂 controllers
│   │   └── commandController.ts    # Handles API requests for command logging and searching
│   ├── 📂 models
│   │   └── commandModel.ts         # Prisma schema and command model logic
│   ├── 📂 routes
│   │   └── commandRoutes.ts        # API routes
│   ├── app.ts                      # Main app configuration
│   ├── server.ts                   # Server initialization and API setup
├── log_command.sh                  # Shell script for logging commands to the API
├── Dockerfile                      # Dockerfile for building the backend service
├── docker-compose.yml              # Docker Compose configuration for the project
├── prisma/
│   └── schema.prisma               # Prisma schema file for PostgreSQL
├── .env.example                    # Example environment variables
├── package.json                    # Node.js dependencies and scripts
└── README.md                       # Project documentation
```

---

## Docker Setup

The project uses Docker and Docker Compose for easy deployment. The `docker-compose.yml` file configures both the backend (Node.js API) and the PostgreSQL database.

To run the project with Docker:

1. Build the Docker images and start the containers:
   ```bash
   docker-compose up --build
   ```

2. The backend API will be available at `http://localhost:8080`.

3. The PostgreSQL database is accessible within the Docker container, but you can configure your local machine to connect to it if needed by modifying the `DATABASE_URL` in the `.env` file.

---


## Acknowledgements

- Built with 💙 using **Node.js**, **TypeScript**, **Prisma**, **PostgreSQL**, and **Docker**.
- Special thanks to the community for their support in shell scripting and terminal logging.

---

## Contact

For questions or suggestions, feel free to reach out:

- Email: [yourname@example.com](mailto:yourname@example.com)
- GitHub: [https://github.com/yourusername](https://github.com/yourusername)
```
