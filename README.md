# Command Logger API

Command Logger API is a Node.js backend service that automatically logs shell commands typed in the terminal to a PostgreSQL database. It also provides an API to search through the logged commands by keyword. The service can be used with different shell environments like Bash.

This project uses Docker for containerization, Prisma ORM for database management, and PostgreSQL for persistent data storage.

---

## Features

- **Log Shell Commands**: Automatically stores commands typed in the terminal.
- **Search Command History**: Allows users to search through their command history using a keyword.
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
   git clone https://github.com/helpingwizard/swe-intern-problem-1.git
   cd swe-intern-problem-1
   ```

2. Start the services using `docker-compose`:
   ```bash
   docker-compose up --build
   ```

3. The API will be running at `http://localhost:8080`.

---

## API Endpoints

### Store a Command

Logs a command to the database.

**POST** `/api/v1/commands`

#### Example Request
```bash
curl -X POST http://localhost:8080/api/v1/commands -d "command=mkdir safedep"
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

To automatically log every command typed in the terminal and search for commands via the terminal, follow these steps:

### Enable Command Logging and Search

1. **Open the `.bashrc` file** for editing:
   ```bash
   nano ~/.bashrc
   ```

2. **Copy and paste the following script** into the file to enable automatic command logging and command search functionality:

   ```bash
   # Function to log the command to the API
   preexec() {
       command="$BASH_COMMAND"
       curl -X POST http://localhost:8080/api/v1/commands -d "command=$command" \
           -H "Content-Type: application/x-www-form-urlencoded" &>/dev/null
   }

   # Enable preexec in Bash
   trap 'preexec' DEBUG

   # Command to search for commands in the database
   search() {
       # Capture the keyword provided to the function
       keyword="$1"
       
       # Send a GET request to the API with the keyword
       curl -X GET "http://localhost:8080/api/v1/commands?keyword=$keyword"
   }
   ```

3. **Save and exit** the file:
   - Press `CTRL + X`, then press `Y` to confirm, and `Enter` to save.

4. **Reload the `.bashrc` file** to apply the changes:
   ```bash
   source ~/.bashrc
   ```

### Test the Functionality

1. **Start the backend server** by running:
   ```bash
   docker-compose up
   ```

2. **Open a different terminal** and type any command. It will automatically get stored in the database.

3. **To search for specific commands** you’ve previously typed, just use the `search` command followed by a keyword:
   ```bash
   search <keyword>
   ```

   For example, to search for commands containing `cd`, use:
   ```bash
   search cd
   ```

---

### Undo the Changes

If you want to undo the changes made to the `.bashrc` file:

1. **Open the `.bashrc` file** again:
   ```bash
   nano ~/.bashrc
   ```

2. **Remove the snippets** we added for command logging and search.

3. **Save and exit** the file:
   - Press `CTRL + X`, then press `Y` to confirm, and `Enter` to save.

4. **Reload the `.bashrc` file** to apply the changes:
   ```bash
   source ~/.bashrc
   ```

Now, your terminal will no longer automatically log commands or provide the search functionality.

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
├── .env                            # Example environment variables
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

- Email: [vctanish7@gmail.com](mailto:vctanish7@gmail.com)
- GitHub: [https://github.com/helpingwizard](https://github.com/helpingwizard)

