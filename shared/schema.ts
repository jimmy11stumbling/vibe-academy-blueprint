import { 
  pgTable, 
  text, 
  serial, 
  integer, 
  boolean, 
  timestamp, 
  jsonb, 
  varchar,
  decimal,
  index
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// User management
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  password: text("password").notNull(),
  avatar: text("avatar"),
  bio: text("bio"),
  website: text("website"),
  timezone: text("timezone").default("America/New_York"),
  language: text("language").default("en"),
  subscriptionPlan: text("subscription_plan").default("free"),
  subscriptionStatus: text("subscription_status").default("active"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Platforms
export const platforms = pgTable("platforms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  logo: text("logo"),
  website: text("website"),
  category: text("category").notNull(),
  pricing: jsonb("pricing").notNull(),
  features: jsonb("features").notNull(),
  strengths: jsonb("strengths").notNull(),
  limitations: jsonb("limitations").notNull(),
  techStack: jsonb("tech_stack").notNull(),
  targetAudience: text("target_audience").notNull(),
  rating: decimal("rating", { precision: 3, scale: 2 }).default("0.00"),
  userCount: text("user_count"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Courses/Academy modules
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  platformId: integer("platform_id").references(() => platforms.id),
  category: text("category").notNull(),
  difficulty: text("difficulty").notNull(),
  duration: text("duration").notNull(),
  price: text("price").default("free"),
  rating: decimal("rating", { precision: 3, scale: 2 }).default("0.00"),
  enrolledStudents: integer("enrolled_students").default(0),
  completionRate: decimal("completion_rate", { precision: 5, scale: 2 }).default("0.00"),
  objectives: jsonb("objectives").notNull(),
  prerequisites: jsonb("prerequisites").notNull(),
  tags: jsonb("tags").notNull(),
  isFeatured: boolean("is_featured").default(false),
  isPublished: boolean("is_published").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Lessons within courses
export const lessons = pgTable("lessons", {
  id: serial("id").primaryKey(),
  courseId: integer("course_id").references(() => courses.id),
  title: text("title").notNull(),
  slug: text("slug").notNull(),
  description: text("description"),
  content: text("content").notNull(),
  videoUrl: text("video_url"),
  duration: text("duration"),
  orderIndex: integer("order_index").notNull(),
  type: text("type").notNull(), // video, interactive, hands-on, reading
  objectives: jsonb("objectives").notNull(),
  isLocked: boolean("is_locked").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// User progress tracking
export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  courseId: integer("course_id").references(() => courses.id),
  lessonId: integer("lesson_id").references(() => lessons.id),
  isCompleted: boolean("is_completed").default(false),
  progress: decimal("progress", { precision: 5, scale: 2 }).default("0.00"),
  timeSpent: integer("time_spent").default(0), // in minutes
  lastAccessed: timestamp("last_accessed").defaultNow(),
  completedAt: timestamp("completed_at"),
});

// Projects
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  platformId: integer("platform_id").references(() => platforms.id),
  authorId: integer("author_id").references(() => users.id),
  category: text("category").notNull(),
  difficulty: text("difficulty").notNull(),
  estimatedTime: text("estimated_time").notNull(),
  technologies: jsonb("technologies").notNull(),
  features: jsonb("features").notNull(),
  status: text("status").notNull(), // template, in-progress, completed, featured
  demoUrl: text("demo_url"),
  githubUrl: text("github_url"),
  rating: decimal("rating", { precision: 3, scale: 2 }).default("0.00"),
  likes: integer("likes").default(0),
  views: integer("views").default(0),
  comments: integer("comments").default(0),
  thumbnail: text("thumbnail"),
  isPublished: boolean("is_published").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// AI Analysis and RAG 2.0 data
export const aiAnalyses = pgTable("ai_analyses", {
  id: serial("id").primaryKey(),
  platformId: integer("platform_id").references(() => platforms.id),
  analysisType: text("analysis_type").notNull(), // market, technical, competitive
  prompt: text("prompt").notNull(),
  response: jsonb("response").notNull(),
  confidence: decimal("confidence", { precision: 3, scale: 2 }),
  model: text("model").default("deepseek-reasoner"),
  tokens: integer("tokens"),
  processingTime: integer("processing_time"), // in milliseconds
  isPublic: boolean("is_public").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// MCP Protocol communication logs
export const mcpLogs = pgTable("mcp_logs", {
  id: serial("id").primaryKey(),
  sourceAgent: text("source_agent").notNull(),
  targetAgent: text("target_agent").notNull(),
  messageType: text("message_type").notNull(),
  payload: jsonb("payload").notNull(),
  status: text("status").notNull(), // sent, received, processed, failed
  responseTime: integer("response_time"), // in milliseconds
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Knowledge base for RAG
export const knowledgeBase = pgTable("knowledge_base", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  source: text("source").notNull(),
  sourceUrl: text("source_url"),
  category: text("category").notNull(),
  tags: jsonb("tags").notNull(),
  embedding: jsonb("embedding"), // Vector embeddings for RAG
  metadata: jsonb("metadata"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  progress: many(userProgress),
  projects: many(projects),
}));

export const platformsRelations = relations(platforms, ({ many }) => ({
  courses: many(courses),
  projects: many(projects),
  analyses: many(aiAnalyses),
}));

export const coursesRelations = relations(courses, ({ one, many }) => ({
  platform: one(platforms, {
    fields: [courses.platformId],
    references: [platforms.id],
  }),
  lessons: many(lessons),
  userProgress: many(userProgress),
}));

export const lessonsRelations = relations(lessons, ({ one, many }) => ({
  course: one(courses, {
    fields: [lessons.courseId],
    references: [courses.id],
  }),
  userProgress: many(userProgress),
}));

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  user: one(users, {
    fields: [userProgress.userId],
    references: [users.id],
  }),
  course: one(courses, {
    fields: [userProgress.courseId],
    references: [courses.id],
  }),
  lesson: one(lessons, {
    fields: [userProgress.lessonId],
    references: [lessons.id],
  }),
}));

// Schema validation
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  firstName: true,
  lastName: true,
  password: true,
});

export const insertPlatformSchema = createInsertSchema(platforms).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertLessonSchema = createInsertSchema(lessons).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertAiAnalysisSchema = createInsertSchema(aiAnalyses).omit({
  id: true,
  createdAt: true,
});

export const insertKnowledgeBaseSchema = createInsertSchema(knowledgeBase).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Platform = typeof platforms.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type Lesson = typeof lessons.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
export type AiAnalysis = typeof aiAnalyses.$inferSelect;
export type McpLog = typeof mcpLogs.$inferSelect;
export type KnowledgeBase = typeof knowledgeBase.$inferSelect;
