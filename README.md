# NestJS Movie Management API

- Get all movies: Users can access a comprehensive list of all available movies.
- Filter by genre: Users can narrow down their search by selecting specific genres of interest.
- Rate a movie: Users can rate a movie, providing feedback on their experience and contributing to the overall rating of the film.
- Sort by rating: Users can view movies ranked by user ratings, helping them discover popular and highly-rated films.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 16.x)
- NestJS CLI

## Installation

1. **Clone the repository:**

```sh
git clone https://github.com/prathamesh2525/nestjs-movie-api
cd nestjs-movie-api
```

2. **Install the dependencies:**

```sh
npm install
```

3. **Install NestJS CLI (if not already installed):**

```sh
npm install -g @nestjs/cli

```

**_Running the App Locally_**

1. Create a `docker-compose.yml` file:

```yml
version: '3.9'
services:
  nestapp:
    container_name: nestmovie
    build: .
    ports:
      - '3000:3000'
    environment:
      - DB_TYPE=postgres
      - PG_HOST=db
      - PG_PORT=5432
      - PG_USER=postgres
      - PG_PASSWORD=postgres
      - PG_DB=postgres
    depends_on:
      - db
  db:
    container_name: db
    image: postgres:12
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: postgres
    ports:
      - '5432:5432'
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata: {}
```

2. **_Start DOcker container_**

```sh
docker-compose up -d
```

4. **_Update `.env` file:_**
   Create a `.env` file in the root of the project and add the following variables:

```env
DB_TYPE=postgres
PG_HOST=db
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=postgres
PG_DB=postgres

```

5. **_ Start the NestJS Application_**

```sh
npm run start:dev
```

**Connecting to PostgreSQL Locally**

1. **_Install PostgreSQL on your local machine and ensure it is running_**
2. **_Create a PostgreSQL Database:_**

```sh
psql -U postgres
CREATE DATABASE nestdb;
```

3. **_Update `.env` file with your locally PostgreSQL connection: _**

```env
DB_TYPE=postgres
PG_HOST=localhost
PG_PORT=5432
PG_USER=your_postgres_user
PG_PASSWORD=your_postgres_password
PG_DB=nestdb

```

**Testing the API**
**_EndPoints_**

- GET /movie - Get all movies
- GET /movie/:id - Get a specific movie by ID
- PATCH /movie/:id/rate - rate a movie
- GET /movie/sorted/rating - Get all movies sorted by rating
