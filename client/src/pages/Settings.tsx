import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Settings as SettingsIcon,
  Bell,
  Shield,
  Palette,
  Globe,
  Monitor,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  X,
  Moon,
  Sun,
  Laptop,
  AlertTriangle,
  Download,
  Upload,
  Trash2,
  Save,
  RefreshCw,
  CreditCard,
  Calendar,
  Activity,
  Book,
  Award,
  HelpCircle
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  
  const [userSettings, setUserSettings] = useState({
    profile: {
      firstName: 'John',
      lastName: 'Developer',
      email: 'john.developer@example.com',
      bio: 'Passionate about no-code development and building amazing applications.',
      website: 'https://johndeveloper.com',
      timezone: 'America/New_York',
      language: 'en',
      avatar: ''
    },
    notifications: {
      emailDigest: true,
      courseUpdates: true,
      communityActivity: false,
      marketingEmails: false,
      newFeatures: true,
      weeklyProgress: true,
      certificateAlerts: true,
      pushNotifications: true
    },
    privacy: {
      profileVisibility: 'public',
      showProgress: true,
      showCertificates: true,
      showProjects: true,
      allowDirectMessages: true,
      analyticsOptOut: false
    },
    learning: {
      defaultDifficulty: 'intermediate',
      autoplay: true,
      playbackSpeed: '1.0',
      subtitles: true,
      darkModeVideos: true,
      downloadQuality: 'hd',
      offlineSync: false
    }
  });

  const [subscription, setSubscription] = useState({
    plan: 'pro',
    status: 'active',
    nextBilling: '2024-02-15',
    amount: '$29/month',
    paymentMethod: '**** **** **** 4242'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSettingChange = (category: string, setting: string, value: any) => {
    setUserSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }));
    setHasChanges(true);
  };

  const handleSaveSettings = () => {
    // In a real app, this would make an API call
    console.log('Saving settings:', userSettings);
    setHasChanges(false);
    // Show success toast
  };

  const handleResetSettings = () => {
    // Reset to defaults
    setHasChanges(false);
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and learning experience
          </p>
        </div>

        {/* Save Bar */}
        {hasChanges && (
          <Card className="mb-6 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-900 dark:text-orange-100">
                    You have unsaved changes
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={handleResetSettings}>
                    Reset
                  </Button>
                  <Button size="sm" onClick={handleSaveSettings}>
                    <Save className="h-3 w-3 mr-1" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input
                      value={userSettings.profile.firstName}
                      onChange={(e) => handleSettingChange('profile', 'firstName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input
                      value={userSettings.profile.lastName}
                      onChange={(e) => handleSettingChange('profile', 'lastName', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    value={userSettings.profile.email}
                    onChange={(e) => handleSettingChange('profile', 'email', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Bio</label>
                  <textarea
                    className="w-full min-h-[100px] p-3 border rounded-md bg-background text-foreground"
                    value={userSettings.profile.bio}
                    onChange={(e) => handleSettingChange('profile', 'bio', e.target.value)}
                    placeholder="Tell others about yourself..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Website</label>
                    <Input
                      value={userSettings.profile.website}
                      onChange={(e) => handleSettingChange('profile', 'website', e.target.value)}
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Timezone</label>
                    <select
                      className="w-full p-2 border rounded-md bg-background text-foreground"
                      value={userSettings.profile.timezone}
                      onChange={(e) => handleSettingChange('profile', 'timezone', e.target.value)}
                    >
                      <option value="America/New_York">Eastern Time</option>
                      <option value="America/Chicago">Central Time</option>
                      <option value="America/Denver">Mountain Time</option>
                      <option value="America/Los_Angeles">Pacific Time</option>
                      <option value="Europe/London">London</option>
                      <option value="Europe/Paris">Paris</option>
                      <option value="Asia/Tokyo">Tokyo</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Theme Settings */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Appearance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-3 block">Theme</label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        onClick={() => setTheme('light')}
                        className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors ${
                          theme === 'light' ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                      >
                        <Sun className="h-5 w-5" />
                        <span className="text-sm">Light</span>
                      </button>
                      <button
                        onClick={() => setTheme('dark')}
                        className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors ${
                          theme === 'dark' ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                      >
                        <Moon className="h-5 w-5" />
                        <span className="text-sm">Dark</span>
                      </button>
                      <button
                        onClick={() => setTheme('system')}
                        className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors ${
                          theme === 'system' ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                      >
                        <Laptop className="h-5 w-5" />
                        <span className="text-sm">System</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Email Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(userSettings.notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-2">
                    <div>
                      <label className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </label>
                      <p className="text-sm text-muted-foreground">
                        {key === 'emailDigest' && 'Weekly summary of your learning progress'}
                        {key === 'courseUpdates' && 'New courses and content updates'}
                        {key === 'communityActivity' && 'Comments and replies on your posts'}
                        {key === 'marketingEmails' && 'Product updates and promotional content'}
                        {key === 'newFeatures' && 'Announcements about new platform features'}
                        {key === 'weeklyProgress' && 'Your weekly learning progress report'}
                        {key === 'certificateAlerts' && 'When you earn new certificates'}
                        {key === 'pushNotifications' && 'Browser push notifications'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleSettingChange('notifications', key, !value)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        value ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          value ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy */}
          <TabsContent value="privacy" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Privacy & Visibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Profile Visibility</label>
                  <select
                    className="w-full p-2 border rounded-md bg-background text-foreground"
                    value={userSettings.privacy.profileVisibility}
                    onChange={(e) => handleSettingChange('privacy', 'profileVisibility', e.target.value)}
                  >
                    <option value="public">Public - Anyone can view your profile</option>
                    <option value="registered">Registered Users - Only logged-in users</option>
                    <option value="private">Private - Only you can view your profile</option>
                  </select>
                </div>

                {Object.entries(userSettings.privacy).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-2">
                    <div>
                      <label className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </label>
                      <p className="text-sm text-muted-foreground">
                        {key === 'showProgress' && 'Display your learning progress publicly'}
                        {key === 'showCertificates' && 'Show your earned certificates on profile'}
                        {key === 'showProjects' && 'Display your completed projects publicly'}
                        {key === 'allowDirectMessages' && 'Allow other users to message you'}
                        {key === 'analyticsOptOut' && 'Opt out of anonymous usage analytics'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleSettingChange('privacy', key, !value)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        value ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          value ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learning Preferences */}
          <TabsContent value="learning" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Learning Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Default Difficulty</label>
                    <select
                      className="w-full p-2 border rounded-md bg-background text-foreground"
                      value={userSettings.learning.defaultDifficulty}
                      onChange={(e) => handleSettingChange('learning', 'defaultDifficulty', e.target.value)}
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Video Playback Speed</label>
                    <select
                      className="w-full p-2 border rounded-md bg-background text-foreground"
                      value={userSettings.learning.playbackSpeed}
                      onChange={(e) => handleSettingChange('learning', 'playbackSpeed', e.target.value)}
                    >
                      <option value="0.5">0.5x</option>
                      <option value="0.75">0.75x</option>
                      <option value="1.0">1.0x</option>
                      <option value="1.25">1.25x</option>
                      <option value="1.5">1.5x</option>
                      <option value="2.0">2.0x</option>
                    </select>
                  </div>
                </div>

                {['autoplay', 'subtitles', 'darkModeVideos', 'offlineSync'].map((key) => (
                  <div key={key} className="flex items-center justify-between py-2">
                    <div>
                      <label className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </label>
                      <p className="text-sm text-muted-foreground">
                        {key === 'autoplay' && 'Automatically play next video in sequence'}
                        {key === 'subtitles' && 'Show subtitles/captions on videos'}
                        {key === 'darkModeVideos' && 'Use dark theme for video player'}
                        {key === 'offlineSync' && 'Download content for offline viewing'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleSettingChange('learning', key, !userSettings.learning[key as keyof typeof userSettings.learning])}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        userSettings.learning[key as keyof typeof userSettings.learning] ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          userSettings.learning[key as keyof typeof userSettings.learning] ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing */}
          <TabsContent value="billing" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Subscription & Billing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Current Plan</label>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-primary text-primary-foreground">Pro Plan</Badge>
                        <Badge variant="outline" className="text-green-600 border-green-600">Active</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Amount</label>
                      <p className="text-lg font-semibold">{subscription.amount}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Next Billing</label>
                      <p className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {subscription.nextBilling}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Payment Method</label>
                      <div className="flex items-center gap-2 mt-1">
                        <CreditCard className="h-4 w-4" />
                        <span>{subscription.paymentMethod}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full">
                        Update Payment Method
                      </Button>
                      <Button variant="outline" className="w-full">
                        Download Invoice
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline">
                      Change Plan
                    </Button>
                    <Button variant="outline">
                      Cancel Subscription
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Advanced */}
          <TabsContent value="advanced" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="h-5 w-5" />
                  Data & Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Export Data</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Download all your learning data, progress, and certificates
                    </p>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export My Data
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Import Data</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Import learning progress from other platforms
                    </p>
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Import Data
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Reset Progress</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Clear all learning progress and start fresh
                    </p>
                    <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Reset Progress
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2 text-red-600">Danger Zone</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Permanently delete your account and all associated data
                    </p>
                    <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help Center
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </div>
                
                <div className="text-center pt-4 border-t text-sm text-muted-foreground">
                  <p>Version 2.1.0 • Updated January 2024</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;