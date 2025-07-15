import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { deepseekRAG } from "./deepseek";
import { insertUserSchema, insertPlatformSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  // User Management
  app.get("/api/users/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  });

  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: "Invalid user data" });
    }
  });

  // Platform Management
  app.get("/api/platforms", async (req, res) => {
    try {
      const platforms = await storage.getAllPlatforms();
      res.json(platforms);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch platforms" });
    }
  });

  app.get("/api/platforms/:slug", async (req, res) => {
    try {
      const platform = await storage.getPlatformBySlug(req.params.slug);
      if (!platform) {
        return res.status(404).json({ error: "Platform not found" });
      }
      res.json(platform);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch platform" });
    }
  });

  // Course Management
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await storage.getAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const courseId = parseInt(req.params.id);
      const course = await storage.getCourseById(courseId);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      
      // Get lessons for this course
      const lessons = await storage.getLessonsByCourse(courseId);
      res.json({ ...course, lessons });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch course" });
    }
  });

  app.get("/api/platforms/:platformId/courses", async (req, res) => {
    try {
      const platformId = parseInt(req.params.platformId);
      const courses = await storage.getCoursesByPlatform(platformId);
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch platform courses" });
    }
  });

  // Project Management
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const projectId = parseInt(req.params.id);
      const project = await storage.getProjectById(projectId);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });

  // User Progress Tracking
  app.get("/api/users/:userId/progress", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const progress = await storage.getUserProgress(userId);
      res.json(progress);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user progress" });
    }
  });

  app.post("/api/users/:userId/progress", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const { courseId, lessonId, progress } = req.body;
      
      const updatedProgress = await storage.updateProgress(
        userId, 
        courseId, 
        lessonId, 
        progress
      );
      
      res.json(updatedProgress);
    } catch (error) {
      res.status(500).json({ error: "Failed to update progress" });
    }
  });

  // AI Analysis and RAG 2.0 endpoints
  app.post("/api/ai/analyze/:platformName", async (req, res) => {
    try {
      const { platformName } = req.params;
      const { analysisType = 'market' } = req.body;
      
      if (!['market', 'technical', 'competitive'].includes(analysisType)) {
        return res.status(400).json({ error: "Invalid analysis type" });
      }
      
      const analysis = await deepseekRAG.analyzeplatform(platformName, analysisType);
      res.json(analysis);
    } catch (error) {
      console.error("Analysis error:", error);
      res.status(500).json({ 
        error: "Failed to generate analysis", 
        details: error.message 
      });
    }
  });

  app.get("/api/platforms/:platformId/analyses", async (req, res) => {
    try {
      const platformId = parseInt(req.params.platformId);
      const analyses = await storage.getAnalysesByPlatform(platformId);
      res.json(analyses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch analyses" });
    }
  });

  // Learning Path Generation
  app.post("/api/users/:userId/learning-path", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const { interests, skillLevel } = req.body;
      
      if (!interests || !Array.isArray(interests) || !skillLevel) {
        return res.status(400).json({ 
          error: "Missing required fields: interests (array) and skillLevel" 
        });
      }
      
      const learningPath = await deepseekRAG.generateLearningPath(
        userId, 
        interests, 
        skillLevel
      );
      
      res.json(learningPath);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to generate learning path",
        details: error.message 
      });
    }
  });

  // MCP Protocol Communication
  app.post("/api/mcp/communicate", async (req, res) => {
    try {
      const { sourceAgent, targetAgent, messageType, payload } = req.body;
      
      if (!sourceAgent || !targetAgent || !messageType || !payload) {
        return res.status(400).json({ 
          error: "Missing required fields: sourceAgent, targetAgent, messageType, payload" 
        });
      }
      
      const mcpResponse = await deepseekRAG.processA2ACommunication(
        sourceAgent,
        targetAgent,
        messageType,
        payload
      );
      
      res.json(mcpResponse);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to process MCP communication",
        details: error.message 
      });
    }
  });

  // Knowledge Base Operations
  app.get("/api/knowledge/search", async (req, res) => {
    try {
      const { q } = req.query;
      
      if (!q || typeof q !== 'string') {
        return res.status(400).json({ error: "Missing search query parameter 'q'" });
      }
      
      const results = await storage.searchKnowledgeBase(q);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: "Failed to search knowledge base" });
    }
  });

  app.post("/api/knowledge", async (req, res) => {
    try {
      const { title, content, source, category, tags } = req.body;
      
      if (!title || !content || !source || !category || !tags) {
        return res.status(400).json({ 
          error: "Missing required fields: title, content, source, category, tags" 
        });
      }
      
      const entry = await storage.addToKnowledgeBase({
        title,
        content,
        source,
        category,
        tags: Array.isArray(tags) ? tags : [tags]
      });
      
      res.status(201).json(entry);
    } catch (error) {
      res.status(500).json({ error: "Failed to add knowledge base entry" });
    }
  });

  // Data seeding endpoint (for development)
  app.post("/api/seed", async (req, res) => {
    try {
      await deepseekRAG.seedKnowledgeBase();
      res.json({ message: "Knowledge base seeded successfully" });
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to seed knowledge base",
        details: error.message 
      });
    }
  });

  // DeepSeek Integration Status
  app.get("/api/ai/status", (req, res) => {
    res.json({
      model: "deepseek-reasoner",
      status: "active",
      features: [
        "Platform Analysis",
        "Learning Path Generation", 
        "MCP Protocol Communication",
        "RAG 2.0 Integration",
        "Knowledge Base Management"
      ],
      timestamp: new Date().toISOString()
    });
  });

  // Error handling middleware
  app.use((err: any, req: any, res: any, next: any) => {
    console.error("API Error:", err);
    res.status(500).json({ 
      error: "Internal server error",
      message: err.message 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
