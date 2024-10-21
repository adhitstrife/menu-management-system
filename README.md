# Laravel + React + Vite Project

This project integrates **Laravel** as a backend and **React** as a frontend using **Vite** for fast development and build. The app includes Tailwind CSS for styling, and Axios is used to handle API requests between the React frontend and Laravel backend.

## Prerequisites

Before you begin, ensure you have the following installed:

-   PHP >= 8.1
-   Composer
-   Node.js (>= 16.x)
-   NPM (or Yarn if you prefer)
-   MySQL or any database supported by Laravel

## Setup Instructions

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install PHP dependencies

```bash
composer install
```

### 3. Install Node dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Copy then .env.example to .env

```bash
cp .env.example .env
```

Now, open the .env file and configure the following values to match your local environment

```bash
APP_NAME=LaravelReactVite
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
```

### 5. Generate Application Key

```bash
php artisan key:generate
```

### 6. Generate Application Key

```bash
php artisan migrate
```

### 6. Run Seeder

```bash
php artisan db:seed --class="MenuSeeder"
```

### 7. Run The Application

```bash
php artisan serve
npm run dev
```

### 8. Build for Production

```bash
npm run build
```

### 9. Running the full application

you can now visit:
http://127.0.0.1:8000
