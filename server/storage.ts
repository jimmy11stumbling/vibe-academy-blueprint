import { 
  users, 
  platforms, 
  courses, 
  lessons, 
  projects, 
  userProgress,
  aiAnalyses,
  knowledgeBase,
  type User, 
  type InsertUser,
  type Platform,
  type Course,
  type Lesson,
  type Project,
  type UserProgress,
  type AiAnalysis,
  type KnowledgeBase
} from "@shared/schema";
import { db } from "./db";
import { eq, and, or, ilike, desc } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, updates: Partial<User>): Promise<User>;
  
  // Platform operations
  getAllPlatforms(): Promise<Platform[]>;
  getPlatformById(id: number): Promise<Platform | undefined>;
  getPlatformBySlug(slug: string): Promise<Platform | undefined>;
  createPlatform(platform: any): Promise<Platform>;
  
  // Course operations
  getAllCourses(): Promise<Course[]>;
  getCourseById(id: number): Promise<Course | undefined>;
  getCoursesByPlatform(platformId: number): Promise<Course[]>;
  createCourse(course: any): Promise<Course>;
  
  // Lesson operations
  getLessonsByCourse(courseId: number): Promise<Lesson[]>;
  getLessonById(id: number): Promise<Lesson | undefined>;
  createLesson(lesson: any): Promise<Lesson>;
  
  // Project operations
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  getProjectsByPlatform(platformId: number): Promise<Project[]>;
  createProject(project: any): Promise<Project>;
  
  // Progress tracking
  getUserProgress(userId: number): Promise<UserProgress[]>;
  updateProgress(userId: number, courseId: number, lessonId: number, progress: Partial<UserProgress>): Promise<UserProgress>;
  
  // AI Analysis
  getAnalysesByPlatform(platformId: number): Promise<AiAnalysis[]>;
  createAnalysis(analysis: any): Promise<AiAnalysis>;
  
  // Knowledge Base
  searchKnowledgeBase(query: string): Promise<KnowledgeBase[]>;
  addToKnowledgeBase(entry: any): Promise<KnowledgeBase>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values({
        ...insertUser,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return user;
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User> {
    const [user] = await db
      .update(users)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return user;
  }

  // Platform operations
  async getAllPlatforms(): Promise<Platform[]> {
    return await db.select().from(platforms).where(eq(platforms.isActive, true));
  }

  async getPlatformById(id: number): Promise<Platform | undefined> {
    const [platform] = await db.select().from(platforms).where(eq(platforms.id, id));
    return platform || undefined;
  }

  async getPlatformBySlug(slug: string): Promise<Platform | undefined> {
    const [platform] = await db.select().from(platforms).where(eq(platforms.slug, slug));
    return platform || undefined;
  }

  async createPlatform(platform: any): Promise<Platform> {
    const [newPlatform] = await db
      .insert(platforms)
      .values({
        ...platform,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return newPlatform;
  }

  // Course operations
  async getAllCourses(): Promise<Course[]> {
    return await db.select().from(courses).where(eq(courses.isPublished, true));
  }

  async getCourseById(id: number): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.id, id));
    return course || undefined;
  }

  async getCoursesByPlatform(platformId: number): Promise<Course[]> {
    return await db.select().from(courses).where(eq(courses.platformId, platformId));
  }

  async createCourse(course: any): Promise<Course> {
    const [newCourse] = await db
      .insert(courses)
      .values({
        ...course,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return newCourse;
  }

  // Lesson operations
  async getLessonsByCourse(courseId: number): Promise<Lesson[]> {
    return await db.select().from(lessons)
      .where(eq(lessons.courseId, courseId))
      .orderBy(lessons.orderIndex);
  }

  async getLessonById(id: number): Promise<Lesson | undefined> {
    const [lesson] = await db.select().from(lessons).where(eq(lessons.id, id));
    return lesson || undefined;
  }

  async createLesson(lesson: any): Promise<Lesson> {
    const [newLesson] = await db
      .insert(lessons)
      .values({
        ...lesson,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return newLesson;
  }

  // Project operations
  async getAllProjects(): Promise<Project[]> {
    return await db.select().from(projects)
      .where(eq(projects.isPublished, true))
      .orderBy(desc(projects.createdAt));
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project || undefined;
  }

  async getProjectsByPlatform(platformId: number): Promise<Project[]> {
    return await db.select().from(projects).where(eq(projects.platformId, platformId));
  }

  async createProject(project: any): Promise<Project> {
    const [newProject] = await db
      .insert(projects)
      .values({
        ...project,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return newProject;
  }

  // Progress tracking
  async getUserProgress(userId: number): Promise<UserProgress[]> {
    return await db.select().from(userProgress).where(eq(userProgress.userId, userId));
  }

  async updateProgress(userId: number, courseId: number, lessonId: number, progress: Partial<UserProgress>): Promise<UserProgress> {
    const [existingProgress] = await db.select().from(userProgress)
      .where(and(
        eq(userProgress.userId, userId),
        eq(userProgress.courseId, courseId),
        eq(userProgress.lessonId, lessonId)
      ));

    if (existingProgress) {
      const [updated] = await db
        .update(userProgress)
        .set(progress)
        .where(eq(userProgress.id, existingProgress.id))
        .returning();
      return updated;
    } else {
      const [created] = await db
        .insert(userProgress)
        .values({
          userId,
          courseId,
          lessonId,
          ...progress,
        })
        .returning();
      return created;
    }
  }

  // AI Analysis
  async getAnalysesByPlatform(platformId: number): Promise<AiAnalysis[]> {
    return await db.select().from(aiAnalyses)
      .where(and(
        eq(aiAnalyses.platformId, platformId),
        eq(aiAnalyses.isPublic, true)
      ))
      .orderBy(desc(aiAnalyses.createdAt));
  }

  async createAnalysis(analysis: any): Promise<AiAnalysis> {
    const [newAnalysis] = await db
      .insert(aiAnalyses)
      .values({
        ...analysis,
        createdAt: new Date(),
      })
      .returning();
    return newAnalysis;
  }

  // Knowledge Base
  async searchKnowledgeBase(query: string): Promise<KnowledgeBase[]> {
    return await db.select().from(knowledgeBase)
      .where(and(
        eq(knowledgeBase.isActive, true),
        or(
          ilike(knowledgeBase.title, `%${query}%`),
          ilike(knowledgeBase.content, `%${query}%`)
        )
      ))
      .limit(20);
  }

  async addToKnowledgeBase(entry: any): Promise<KnowledgeBase> {
    const [newEntry] = await db
      .insert(knowledgeBase)
      .values({
        ...entry,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return newEntry;
  }
}

export const storage = new DatabaseStorage();
