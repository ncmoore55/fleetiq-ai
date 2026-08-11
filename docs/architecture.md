# FleetIQ AI Architecture

FleetIQ AI is organized as a full-stack application with separate frontend, backend, database, and future AI responsibilities.

The goal of this architecture is to keep the project organized, maintainable, and easy to expand as new features are added.

## High-Level Architecture

```text
User
  ↓
React Frontend
  ↓
Frontend Components
  ↓
Frontend Services
  ↓
FastAPI Backend
  ↓
PostgreSQL Database
```

As FleetIQ grows, additional service, repository, and AI layers will be added without changing the responsibilities of the existing layers.

## Frontend

The frontend is built with React and TypeScript.

```text
frontend/src/
├── assets/
├── components/
├── services/
├── types/
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

### Components

`components/` contains reusable user interface components.

Current components:

- `VehicleSearchForm.tsx` — collects vehicle search information from the user.
- `VehicleResults.tsx` — displays the results returned from a vehicle search.
- `VehicleCard.tsx` — displays information for one vehicle.

### Services

`services/` contains code responsible for communicating with the backend API.

Current service:

- `vehicleService.ts` — sends vehicle search requests to the FastAPI backend.

This keeps API communication separate from React components.

### Types

`types/` contains shared TypeScript data structures.

Current types include:

- `Vehicle`
- `VehicleSearchCriteria`

These types define the expected structure of vehicle and search data throughout the frontend.

### App.tsx

`App.tsx` acts as the main coordinator for the frontend.

It:

- Manages application-level search state.
- Receives search criteria from `VehicleSearchForm`.
- Calls `vehicleService`.
- Stores returned vehicle results.
- Passes those results to `VehicleResults`.

Current frontend flow:

```text
VehicleSearchForm
       ↓
     App.tsx
       ↓
vehicleService.ts
       ↓
 FastAPI Backend
       ↓
     App.tsx
       ↓
VehicleResults
       ↓
 VehicleCard
```

## Backend

The backend is built with Python and FastAPI.

Application code is located in:

```text
backend/app/
```

The backend is organized into separate areas of responsibility:

```text
backend/app/
├── api/
├── core/
├── database/
├── models/
├── repositories/
├── schemas/
├── services/
├── __init__.py
└── main.py
```

### API

`api/` contains the FastAPI API layer.

Routes are located in:

```text
api/routes/
```

Current route:

- `vehicles.py` — handles vehicle-related API requests.

### Core

`core/` contains application-wide configuration.

Current file:

- `config.py` — loads configuration and environment settings used by FleetIQ.

### Database

`database/` contains Python code used to connect the backend to PostgreSQL.

Current file:

- `connection.py` — creates the PostgreSQL database connection.

The current database configuration flow is:

```text
.env
  ↓
config.py
  ↓
connection.py
  ↓
PostgreSQL
```

### Models

`models/` is reserved for database models as FleetIQ's database layer grows.

### Schemas

`schemas/` is reserved for request and response validation models.

These will allow FastAPI and Pydantic to validate data entering and leaving the backend.

### Repositories

`repositories/` is reserved for database query logic.

As FleetIQ grows, SQL queries will be moved out of API routes and into repositories.

The target backend flow is:

```text
API Route
    ↓
Service
    ↓
Repository
    ↓
PostgreSQL
```

### Services

`services/` is reserved for FleetIQ business logic.

Services will sit between API routes and repositories so that routes remain focused on HTTP requests and responses.

## Database Infrastructure

Database-related development resources are stored at the project root:

```text
database/
├── migrations/
└── seeds/
```

`migrations/` will contain changes to the PostgreSQL database structure.

`seeds/` will contain development and testing data used to populate the database.

A formal migration system may replace or expand this structure as the database becomes more complex.

## AI

FleetIQ is designed to support AI-powered vehicle intelligence.

AI functionality will be added to the backend when those features are implemented.

Potential responsibilities include:

- Vehicle analysis
- Auction intelligence
- AI-assisted vehicle comparisons
- Natural-language interaction
- Retrieval and analysis of vehicle information

AI-specific folders and abstractions will only be added when the application requires them.

## Docker

FleetIQ uses Docker infrastructure to support consistent development and future deployment.

Backend Docker files are located in:

```text
backend/
├── Dockerfile
└── .dockerignore
```

The project root contains:

```text
docker-compose.yml
```

Docker Compose will eventually coordinate the application's services, including the backend, frontend, and PostgreSQL database.

## Testing

Backend tests are stored in:

```text
backend/tests/
```

Automated testing will expand as additional backend services, repositories, and API functionality are implemented.

## Continuous Integration

GitHub Actions workflows are stored in:

```text
.github/workflows/
```

CI workflows will be added as FleetIQ's automated testing and build requirements grow.

## Scripts

Developer and maintenance scripts are stored in:

```text
scripts/
```

Scripts will only be added when a repeatable development or maintenance task requires one.

## Environment Configuration

Private environment-specific values are stored in:

```text
backend/.env
```

This file is not committed to Git.

An example configuration is stored in:

```text
backend/.env.example
```

This documents the environment variables required to run FleetIQ without exposing private credentials.

## Architecture Principles

FleetIQ follows several core architecture principles:

1. Keep frontend presentation separate from API communication.
2. Keep API routes separate from business logic.
3. Keep business logic separate from database access.
4. Keep credentials and configuration outside application code.
5. Keep components and modules focused on one responsibility.
6. Add new architectural layers only when the application actually needs them.
7. Prefer clear, maintainable code over unnecessary complexity.