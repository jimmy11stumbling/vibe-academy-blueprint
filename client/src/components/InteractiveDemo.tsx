
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Code, 
  Eye,
  Monitor,
  Smartphone,
  Tablet,
  MousePointer,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  code: string;
  platform: string;
  duration: number;
  result: string;
}

const demoSteps: DemoStep[] = [
  {
    id: 'lovable-chat',
    title: 'Chat-Driven Development',
    description: 'Create a todo app using natural language with Lovable',
    code: `User: "Create a todo app with the ability to add, edit, and delete tasks. Include a counter for completed tasks."

AI Response: I'll create a beautiful todo app for you with all the features you requested.

Generated Components:
- TodoApp.tsx (Main component)
- TodoItem.tsx (Individual task)  
- AddTodoForm.tsx (Add new tasks)
- TaskCounter.tsx (Progress tracking)

// Auto-generated code with perfect styling
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      <AddTodoForm onAdd={addTask} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      <TaskCounter completed={completedCount} total={tasks.length} />
    </div>
  );
};`,
    platform: 'Lovable 2.0',
    duration: 30000,
    result: 'Complete todo application with modern UI, task management, and real-time updates'
  },
  {
    id: 'cursor-ai-assist',
    title: 'AI-Powered Code Completion',
    description: 'Watch Cursor predict and complete complex code patterns',
    code: `// Starting to type a React component
function UserProfile({ user }) {
  // Cursor predicts the entire component structure
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio
  });

  // AI suggests error handling, form validation, and best practices
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser(formData);
      if (response.ok) {
        setIsEditing(false);
        toast.success('Profile updated successfully');
      }
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <div className="profile-container">
      {isEditing ? (
        <ProfileEditForm data={formData} onSubmit={handleSubmit} />
      ) : (
        <ProfileDisplay user={user} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
}`,
    platform: 'Cursor',
    duration: 25000,
    result: 'Fully functional user profile component with validation and error handling'
  },
  {
    id: 'replit-collab',
    title: 'Real-Time Collaboration',
    description: 'Multiple developers coding together in Replit',
    code: `// Developer 1 creates the base structure
class GameEngine {
  constructor() {
    this.players = [];
    this.gameState = 'waiting';
    this.eventBus = new EventEmitter();
  }

// Developer 2 adds player management (simultaneously)
  addPlayer(player) {
    this.players.push(player);
    this.broadcast('player-joined', player);
    this.checkGameStart();
  }

// Developer 3 implements game logic (in real-time)
  startGame() {
    if (this.players.length >= 2) {
      this.gameState = 'active';
      this.initializeGame();
      this.broadcast('game-started', { players: this.players });
    }
  }

  // Live cursor tracking - all developers see each other's cursors
  updateCursor(playerId, position) {
    this.broadcast('cursor-update', { playerId, position });
  }
}`,
    platform: 'Replit',
    duration: 35000,
    result: 'Collaborative multiplayer game engine built by multiple developers simultaneously'
  },
  {
    id: 'windsurf-cascade',
    title: 'Cascade AI Workflow',
    description: 'Experience Windsurf\'s intelligent code generation and optimization',
    code: `// Windsurf Cascade AI analyzing requirements
User Request: "Build an e-commerce cart component with discount calculation"

// AI analyzes and creates optimized structure
const ShoppingCart = ({ items, discounts }) => {
  const [cartItems, setCartItems] = useState(items);
  const [appliedDiscounts, setAppliedDiscounts] = useState([]);

  // Cascade AI automatically optimizes calculations
  const subtotal = useMemo(() => 
    cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  , [cartItems]);

  const discountAmount = useMemo(() => 
    appliedDiscounts.reduce((total, discount) => {
      return total + calculateDiscount(subtotal, discount);
    }, 0)
  , [subtotal, appliedDiscounts]);

  // Auto-generated with best practices
  const updateQuantity = useCallback((id, quantity) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  }, []);

  return (
    <div className="cart-container">
      <CartItemList items={cartItems} onUpdateQuantity={updateQuantity} />
      <DiscountSection discounts={discounts} onApply={applyDiscount} />
      <CartSummary subtotal={subtotal} discount={discountAmount} total={subtotal - discountAmount} />
    </div>
  );
};`,
    platform: 'Windsurf',
    duration: 28000,
    result: 'Production-ready e-commerce cart with optimized performance and accessibility'
  },
  {
    id: 'bolt-fullstack',
    title: 'Full-Stack Generation',
    description: 'Bolt creates complete applications with frontend, backend, and database',
    code: `// Bolt generates entire stack from single prompt
User: "Create a blog platform with user authentication and comments"

// Auto-generated backend (Node.js + Express)
app.post('/api/posts', authenticate, async (req, res) => {
  const { title, content, tags } = req.body;
  const post = await Post.create({
    title,
    content,
    tags,
    authorId: req.user.id,
    publishedAt: new Date()
  });
  res.json(post);
});

// Auto-generated frontend (React)
const BlogPost = ({ postId }) => {
  const { data: post, isLoading } = useQuery(['post', postId], 
    () => api.getPost(postId)
  );
  
  if (isLoading) return <PostSkeleton />;
  
  return (
    <article className="blog-post">
      <header>
        <h1>{post.title}</h1>
        <PostMeta author={post.author} publishedAt={post.publishedAt} />
      </header>
      <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
      <CommentSection postId={post.id} />
    </article>
  );
};

// Auto-generated database schema
const postSchema = {
  id: { type: 'uuid', primaryKey: true },
  title: { type: 'varchar', length: 255, required: true },
  content: { type: 'text', required: true },
  authorId: { type: 'uuid', foreignKey: 'users.id' },
  publishedAt: { type: 'timestamp', default: 'now()' }
};`,
    platform: 'Bolt',
    duration: 40000,
    result: 'Complete blog platform with authentication, posts, comments, and responsive design'
  },
  {
    id: 'claude-artifacts',
    title: 'Claude Artifacts Creation',
    description: 'Build interactive components and applications with Claude',
    code: `// Claude creates interactive data visualization
User: "Create an interactive dashboard for sales analytics"

// Claude generates complete React component with D3.js integration
import React, { useState, useEffect } from 'react';
import { LineChart, BarChart, PieChart, ResponsiveContainer } from 'recharts';

const SalesDashboard = ({ data }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [activeChart, setActiveChart] = useState('revenue');

  const processedData = useMemo(() => {
    return data.filter(item => {
      const date = new Date(item.date);
      const now = new Date();
      const daysDiff = (now - date) / (1000 * 60 * 60 * 24);
      
      switch(selectedPeriod) {
        case 'week': return daysDiff <= 7;
        case 'month': return daysDiff <= 30;
        case 'quarter': return daysDiff <= 90;
        default: return true;
      }
    });
  }, [data, selectedPeriod]);

  const chartComponents = {
    revenue: <LineChart data={processedData}><Line dataKey="revenue" stroke="#8884d8" /></LineChart>,
    units: <BarChart data={processedData}><Bar dataKey="unitsSold" fill="#82ca9d" /></BarChart>,
    categories: <PieChart data={categoryData}><Pie dataKey="value" nameKey="category" /></PieChart>
  };

  return (
    <div className="dashboard-container">
      <DashboardHeader 
        selectedPeriod={selectedPeriod}
        onPeriodChange={setSelectedPeriod}
        activeChart={activeChart}
        onChartChange={setActiveChart}
      />
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          {chartComponents[activeChart]}
        </ResponsiveContainer>
      </div>
      <MetricsGrid data={processedData} />
    </div>
  );
};`,
    platform: 'Claude Code',
    duration: 32000,
    result: 'Interactive sales dashboard with multiple chart types and real-time filtering'
  },
  {
    id: 'gemini-cli',
    title: 'Command-Line Code Generation',
    description: 'Use Gemini CLI to generate and optimize code from terminal',
    code: `# Gemini CLI workflow for backend API development
$ gemini generate api --type="REST" --database="PostgreSQL" --auth="JWT"

# Auto-generates complete API structure
📁 Generated API Structure:
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── productController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   └── products.js
│   └── utils/
│       ├── database.js
│       └── jwt.js

# Generated authentication middleware
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'Access denied' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

# Generated with proper error handling and validation
$ gemini test generate --coverage=90
✅ Generated 24 test cases with 94% coverage`,
    platform: 'Gemini CLI',
    duration: 35000,
    result: 'Complete REST API with authentication, testing, and documentation'
  },
  {
    id: 'base44-rapid',
    title: 'Rapid Prototyping',
    description: 'Quickly prototype and iterate on ideas with Base44',
    code: `// Base44 rapid prototype generation
Concept: "Social media scheduler for small businesses"

// Auto-generated MVP in minutes
const SocialScheduler = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [scheduleDate, setScheduleDate] = useState(new Date());

  const platformIntegrations = {
    twitter: useTwitterAPI(),
    facebook: useFacebookAPI(),
    instagram: useInstagramAPI(),
    linkedin: useLinkedInAPI()
  };

  const schedulePost = async (postData) => {
    const scheduledPost = {
      id: generateId(),
      content: postData.content,
      media: postData.media,
      platforms: selectedPlatforms,
      scheduledFor: scheduleDate,
      status: 'scheduled',
      createdAt: new Date()
    };

    // Auto-retry logic and error handling
    for (const platform of selectedPlatforms) {
      try {
        await platformIntegrations[platform].schedulePost(scheduledPost);
      } catch (error) {
        console.error(\`Failed to schedule on \${platform}:\`, error);
        // Implement retry queue
        addToRetryQueue(scheduledPost, platform);
      }
    }

    setPosts(prev => [...prev, scheduledPost]);
  };

  return (
    <div className="scheduler-app">
      <PostComposer onSchedule={schedulePost} />
      <PlatformSelector 
        selected={selectedPlatforms}
        onChange={setSelectedPlatforms}
      />
      <ScheduleCalendar 
        posts={posts}
        selectedDate={scheduleDate}
        onDateChange={setScheduleDate}
      />
      <AnalyticsDashboard posts={posts} />
    </div>
  );
};`,
    platform: 'Base44',
    duration: 22000,
    result: 'Functional social media scheduler MVP with multi-platform support'
  },
  {
    id: 'v0-components',
    title: 'Component Generation',
    description: 'Create beautiful UI components instantly with v0',
    code: `// v0 generates production-ready components from descriptions
User: "Create a modern pricing table with 3 tiers, monthly/yearly toggle, and popular badge"

// Auto-generated with perfect styling and accessibility
const PricingTable = ({ billingPeriod = 'monthly' }) => {
  const plans = [
    {
      name: 'Starter',
      price: billingPeriod === 'monthly' ? 9 : 90,
      description: 'Perfect for individuals and small projects',
      features: ['5 Projects', '10GB Storage', 'Email Support', 'Basic Analytics'],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Professional', 
      price: billingPeriod === 'monthly' ? 29 : 290,
      description: 'Ideal for growing teams and businesses',
      features: ['50 Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics', 'Team Collaboration'],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: billingPeriod === 'monthly' ? 99 : 990,
      description: 'For large organizations with advanced needs',
      features: ['Unlimited Projects', '1TB Storage', '24/7 Phone Support', 'Custom Analytics', 'Advanced Security'],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="pricing-container max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-xl text-gray-600">Start building amazing projects today</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className={\`pricing-card relative rounded-2xl border p-8 shadow-lg transition-all hover:shadow-xl \${plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'}\`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="text-4xl font-bold">
                \${plan.price}
                <span className="text-lg text-gray-500">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={\`w-full py-3 px-6 rounded-lg font-semibold transition-colors \${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}\`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};`,
    platform: 'V0',
    duration: 25000,
    result: 'Beautiful, responsive pricing table with animations and accessibility features'
  },
  {
    id: 'rork-mobile',
    title: 'Cross-Platform Mobile Development',
    description: 'Build native mobile apps for iOS and Android with Rork',
    code: `// Rork generates cross-platform mobile application
User: "Create a fitness tracking app with workout logging and progress charts"

// Auto-generated React Native app with native integrations
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestPermissions, startWorkout, stopWorkout } from './utils/healthKit';

const FitnessTracker = () => {
  const [workouts, setWorkouts] = useState([]);
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [weeklyProgress, setWeeklyProgress] = useState({});

  useEffect(() => {
    loadWorkoutHistory();
    requestHealthPermissions();
  }, []);

  const startNewWorkout = async (type) => {
    const workout = {
      id: Date.now(),
      type,
      startTime: new Date(),
      exercises: [],
      status: 'active'
    };
    
    setActiveWorkout(workout);
    await startWorkout(type); // Native HealthKit integration
  };

  const logExercise = async (exercise) => {
    const updatedWorkout = {
      ...activeWorkout,
      exercises: [...activeWorkout.exercises, {
        ...exercise,
        timestamp: new Date(),
        sets: exercise.sets || [],
        reps: exercise.reps || 0,
        weight: exercise.weight || 0
      }]
    };
    
    setActiveWorkout(updatedWorkout);
    await AsyncStorage.setItem('activeWorkout', JSON.stringify(updatedWorkout));
  };

  const finishWorkout = async () => {
    const completedWorkout = {
      ...activeWorkout,
      endTime: new Date(),
      status: 'completed',
      duration: Date.now() - activeWorkout.startTime
    };
    
    const updatedWorkouts = [...workouts, completedWorkout];
    setWorkouts(updatedWorkouts);
    setActiveWorkout(null);
    
    await AsyncStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
    await stopWorkout(); // Native HealthKit integration
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Fitness Tracker</Text>
        <ProgressChart
          data={{ data: [weeklyProgress.completion || 0] }}
          width={100}
          height={100}
          strokeWidth={8}
          radius={32}
          chartConfig={chartConfig}
        />
      </View>
      
      {activeWorkout ? (
        <ActiveWorkoutView 
          workout={activeWorkout}
          onLogExercise={logExercise}
          onFinish={finishWorkout}
        />
      ) : (
        <WorkoutStartView onStart={startNewWorkout} />
      )}
      
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Weekly Progress</Text>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{ data: weeklyProgress.dailyMinutes || [] }]
          }}
          width={350}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
      
      <WorkoutHistory workouts={workouts} />
    </ScrollView>
  );
};

// Auto-generated with native performance optimizations
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 20, flexDirection: 'row', justifyContent: 'space-between' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333' }
});`,
    platform: 'Rork',
    duration: 38000,
    result: 'Native iOS/Android fitness app with HealthKit integration and offline storage'
  }
];

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState('desktop');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / (demoSteps[currentStep].duration / 100));
          if (newProgress >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return newProgress;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setProgress(0);
    setIsPlaying(false);
  };

  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setProgress(0);
    setIsPlaying(false);
  };

  const currentDemo = demoSteps[currentStep];

  const getDeviceClass = () => {
    switch (selectedDevice) {
      case 'mobile':
        return 'max-w-sm mx-auto';
      case 'tablet':
        return 'max-w-2xl mx-auto';
      default:
        return 'w-full';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Interactive Platform Demos</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the power of AI-assisted development platforms through interactive demonstrations
        </p>
      </div>

      <Tabs defaultValue="live-demo" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="live-demo">Live Demo</TabsTrigger>
          <TabsTrigger value="comparison">Side-by-Side</TabsTrigger>
          <TabsTrigger value="tutorials">Video Tutorials</TabsTrigger>
        </TabsList>

        <TabsContent value="live-demo" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Demo Steps Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="font-semibold">Demo Steps</h3>
              {demoSteps.map((step, index) => (
                <Card 
                  key={step.id}
                  className={`cursor-pointer transition-all ${
                    currentStep === index ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                  }`}
                  onClick={() => handleStepChange(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${
                        currentStep === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{step.title}</h4>
                        <Badge variant="outline" className="text-xs mt-1">
                          {step.platform}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Demo Area */}
            <div className="lg:col-span-3 space-y-6">
              {/* Demo Controls */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        {currentDemo.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mt-1">{currentDemo.description}</p>
                    </div>
                    <Badge variant="outline">{currentDemo.platform}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Demo Progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center gap-4">
                    <Button onClick={handlePlay} variant="outline">
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      {isPlaying ? 'Pause' : 'Play'}
                    </Button>
                    <Button onClick={handleReset} variant="outline">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>

                    {/* Device Selector */}
                    <div className="flex items-center gap-2 ml-auto">
                      <Button
                        size="sm"
                        variant={selectedDevice === 'desktop' ? 'default' : 'outline'}
                        onClick={() => setSelectedDevice('desktop')}
                      >
                        <Monitor className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant={selectedDevice === 'tablet' ? 'default' : 'outline'}
                        onClick={() => setSelectedDevice('tablet')}
                      >
                        <Tablet className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant={selectedDevice === 'mobile' ? 'default' : 'outline'}
                        onClick={() => setSelectedDevice('mobile')}
                      >
                        <Smartphone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Code and Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Code Panel */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Code className="h-5 w-5" />
                      Code Generation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-auto max-h-96">
                      <pre className="whitespace-pre-wrap">{currentDemo.code}</pre>
                    </div>
                  </CardContent>
                </Card>

                {/* Preview Panel */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Eye className="h-5 w-5" />
                      Live Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`bg-muted rounded-lg p-4 min-h-96 flex items-center justify-center ${getDeviceClass()}`}>
                      <div className="text-center space-y-4">
                        {progress < 100 ? (
                          <>
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                            <p className="text-muted-foreground">Generating application...</p>
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                            <div>
                              <h3 className="font-semibold">Demo Complete!</h3>
                              <p className="text-sm text-muted-foreground mt-1">{currentDemo.result}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Next Steps */}
              {progress >= 100 && (
                <Card className="glass-card border-green-200 dark:border-green-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-green-700 dark:text-green-300">
                          Ready to try {currentDemo.platform}?
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Start building your own applications with this powerful platform
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View Tutorial
                        </Button>
                        <Button size="sm">
                          Start Building
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Platform Comparison Demo</h3>
            <p className="text-muted-foreground">
              See how different platforms approach the same development task
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoSteps.map((demo, index) => (
              <Card key={demo.id} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">{demo.platform}</CardTitle>
                  <Badge variant="outline">{demo.title}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted rounded p-3 font-mono text-xs">
                    <pre className="whitespace-pre-wrap overflow-auto max-h-32">
                      {demo.code.substring(0, 200)}...
                    </pre>
                  </div>
                  <Button size="sm" className="w-full">
                    <Play className="h-3 w-3 mr-2" />
                    Run Demo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tutorials" className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Video Tutorials</h3>
            <p className="text-muted-foreground">
              In-depth video guides for mastering each platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoSteps.map((demo, index) => (
              <Card key={demo.id} className="glass-card">
                <CardContent className="p-0">
                  <div className="bg-muted aspect-video rounded-t-lg flex items-center justify-center">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                  <div className="p-4 space-y-3">
                    <h4 className="font-semibold">{demo.title}</h4>
                    <p className="text-sm text-muted-foreground">{demo.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{demo.platform}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {Math.round(demo.duration / 1000)}s
                      </span>
                    </div>
                    <Button size="sm" className="w-full">
                      <Play className="h-3 w-3 mr-2" />
                      Watch Tutorial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InteractiveDemo;
