# replit.md

## Overview

This is a modern full-stack web application for analyzing and comparing AI development platforms. The application provides comprehensive insights into no-code/low-code development platforms like Lovable 2.0, Cursor IDE, and others. It features a React frontend with a sophisticated educational platform for learning about these tools, complete with courses, tutorials, user authentication, and interactive demonstrations.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (Latest)

### 2025-01-14 - Comprehensive Academy & Platform System Implementation

✅ **Completed:**
- Created comprehensive Academy.tsx with 6 learning tracks and filtering system
- Built detailed ModuleDetail.tsx with interactive lesson progression
- Implemented complete platformsData.ts with all 10 no-code platforms
- Enhanced PlatformDetail.tsx with 6-tab comprehensive platform analysis
- Rebuilt Platforms.tsx with advanced search, filtering, and categorization
- Added essential UI components (Input, Progress, Tabs) for full functionality
- Integrated complete platform ecosystem with detailed features, pricing, integrations

**Key Features Added:**
- 3 FREE foundation courses (Planning, PRD Creation, Platform Mastery)
- Learning tracks for all platforms (Lovable, Cursor, Replit, Windsurf, Bolt, etc.)
- Advanced platform comparison and analysis system
- Interactive course progress tracking
- Comprehensive platform detail pages with pricing, features, limitations
- Search and filtering across all platforms and categories

➡️ **Next Steps:**
- Implement RAG 2.0 database integration with MCP protocols
- Add deepseek-reasoner integration for AI-powered features
- Create platform-specific tutorial modules and hands-on exercises
- Implement A2A communication between agents, tools, and servers
- Add user authentication and progress tracking
- Build real-time collaboration features

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Radix UI primitives with custom styling
- **State Management**: React hooks and context (Auth, Theme)
- **Routing**: React Router for client-side navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Storage**: PostgreSQL-based session management with connect-pg-simple
- **API Design**: RESTful API structure with modular route organization

### Data Storage Solutions
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with schema defined in shared directory
- **Migration Strategy**: Drizzle-kit for database schema management
- **Connection Pooling**: Neon serverless connection pooling

## Key Components

### Authentication System
- Context-based authentication with localStorage persistence
- Modal-based login/signup flows
- User profile management
- Session-based authentication (backend ready)

### Educational Platform
- **Course System**: Comprehensive course catalog with ratings, progress tracking
- **Tutorial Modules**: Platform-specific learning modules (Lovable, Cursor, etc.)
- **Interactive Demos**: Real-time platform demonstrations
- **Learning Paths**: Customizable educational journeys
- **Certification System**: Course completion certificates

### Platform Analysis
- **Comparison Tools**: Side-by-side platform feature comparisons
- **Market Analysis**: Industry insights and trend analysis
- **Resource Library**: Searchable collection of tutorials and guides
- **Community Features**: User reviews and testimonials

### UI/UX Components
- **Theme System**: Light/dark/system theme support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Glass Morphism**: Modern UI aesthetic with backdrop blur effects
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

## Data Flow

### Client-Side Flow
1. **Route Handling**: React Router manages navigation and page rendering
2. **State Management**: Context providers handle global state (auth, theme)
3. **API Communication**: Fetch-based HTTP requests to backend endpoints
4. **Data Persistence**: LocalStorage for user preferences and session data

### Server-Side Flow
1. **Request Processing**: Express middleware handles routing and request parsing
2. **Database Operations**: Drizzle ORM manages database queries and transactions
3. **Session Management**: PostgreSQL-based session storage
4. **Response Formatting**: JSON API responses with consistent error handling

### Database Schema
- **Users Table**: User authentication and profile information
- **Extensible Design**: Schema designed for future expansion (courses, progress, etc.)

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React Router, React Query for state management
- **UI Framework**: Radix UI components with Tailwind CSS
- **Backend**: Express.js with TypeScript support
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Validation**: Zod for runtime type validation

### Development Tools
- **Build System**: Vite with TypeScript support
- **Code Quality**: ESBuild for production builds
- **Development**: Hot reload with Vite dev server
- **Replit Integration**: Cartographer plugin for Replit environment

### Third-Party Integrations
- **Email Services**: Ready for transactional email integration
- **Payment Processing**: Stripe integration prepared for premium features
- **Analytics**: Structure ready for user analytics implementation

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot reload
- **Database**: Neon PostgreSQL development instance
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Static build output to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Assets**: Optimized static asset serving
- **Environment**: NODE_ENV-based configuration

### Deployment Configuration
- **Database Migrations**: Drizzle-kit push command for schema updates
- **Static Assets**: Express static file serving for production
- **Error Handling**: Comprehensive error boundaries and API error responses
- **Performance**: Optimized builds with code splitting and asset compression

### Scalability Considerations
- **Database**: Serverless PostgreSQL with connection pooling
- **Frontend**: Static asset optimization and lazy loading
- **API**: Modular route structure for easy scaling
- **Caching**: Ready for Redis integration for session and data caching

The application follows modern web development best practices with a focus on type safety, performance, and user experience. The architecture supports both rapid development and production scalability.