## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL (or any other database supported by Prisma)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sohaibasghar/nextauth-mui.git
   cd nextauth-mui
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Project

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Database Setup

1. Create a PostgreSQL database. You can use a GUI tool like pgAdmin or run the following command in your terminal:

   ```sql
   CREATE DATABASE nextauth-db;
   ```

2. Update the `.env` file with your database connection string:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/nextauth-db?schema=public"
   NEXTAUTH_SECRET="your-super-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

## Generating Prisma Migrations

1. After updating your Prisma schema in `prisma/schema.prisma`, run the following command to create a migration:

   ```bash
   npx prisma migrate dev --name your_migration_name
   ```

   This command will:

   - Create a new migration file in the `prisma/migrations` directory.
   - Apply the migration to your database.
   - Generate the Prisma Client.

2. To generate the Prisma Client after making changes to your schema, run:

   ```bash
   npx prisma generate
   ```

3. To push the migration:

   ```bash
   npx prisma db push
   ```

## Environment Variables

Make sure to create a `.env` file in the root of your project with the following variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/nextauth-db?schema=public"
NEXTAUTH_SECRET="your-super-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```
