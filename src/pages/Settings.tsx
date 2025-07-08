
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Download,
  Trash2,
  Eye,
  EyeOff,
  Settings as SettingsIcon,
  Moon,
  Sun,
  Globe,
  Smartphone,
  Mail
} from 'lucide-react';

const Settings = () => {
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: false,
      marketing: true,
      courseUpdates: true,
      communityActivity: false
    },
    privacy: {
      profileVisibility: 'public',
      showProgress: true,
      showCertificates: true,
      allowMessages: true
    },
    preferences: {
      language: 'en',
      timezone: 'America/New_York',
      currency: 'USD',
      theme: theme
    }
  });

  const handleSaveSettings = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Settings Updated',
        description: 'Your settings have been successfully saved.',
      });
    }, 1000);
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: 'Account Deleted',
          description: 'Your account has been successfully deleted.',
          variant: 'destructive'
        });
        signOut();
      }, 1000);
    }
  };

  const handleExportData = () => {
    toast({
      title: 'Data Export Started',
      description: 'We\'ll email you a copy of your data within 24 hours.',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Billing
              </TabsTrigger>
              <TabsTrigger value="advanced" className="flex items-center gap-2">
                <SettingsIcon className="h-4 w-4" />
                Advanced
              </TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" defaultValue={user?.fullName} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={user?.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="San Francisco, CA" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" placeholder="Tell us about yourself..." />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Change Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Input 
                            id="currentPassword" 
                            type={showPassword ? 'text' : 'password'}
                            className="pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground bg-transparent border-none cursor-pointer"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleSaveSettings} disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Course Updates</div>
                            <div className="text-sm text-muted-foreground">New lessons and course announcements</div>
                          </div>
                        </div>
                        <Switch 
                          checked={settings.notifications.courseUpdates}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({
                              ...prev,
                              notifications: { ...prev.notifications, courseUpdates: checked }
                            }))
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Bell className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Community Activity</div>
                            <div className="text-sm text-muted-foreground">Comments, likes, and mentions</div>
                          </div>
                        </div>
                        <Switch 
                          checked={settings.notifications.communityActivity}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({
                              ...prev,
                              notifications: { ...prev.notifications, communityActivity: checked }
                            }))
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Marketing Emails</div>
                            <div className="text-sm text-muted-foreground">Product updates and promotions</div>
                          </div>
                        </div>
                        <Switch 
                          checked={settings.notifications.marketing}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({
                              ...prev,
                              notifications: { ...prev.notifications, marketing: checked }
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Push Notifications</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium">Enable Push Notifications</div>
                          <div className="text-sm text-muted-foreground">Receive notifications on your device</div>
                        </div>
                      </div>
                      <Switch 
                        checked={settings.notifications.push}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({
                            ...prev,
                            notifications: { ...prev.notifications, push: checked }
                          }))
                        }
                      />
                    </div>
                  </div>

                  <Button onClick={handleSaveSettings} disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save Preferences'}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Privacy & Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Profile Visibility</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Show Learning Progress</div>
                          <div className="text-sm text-muted-foreground">Display your course progress publicly</div>
                        </div>
                        <Switch 
                          checked={settings.privacy.showProgress}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({
                              ...prev,
                              privacy: { ...prev.privacy, showProgress: checked }
                            }))
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Show Certificates</div>
                          <div className="text-sm text-muted-foreground">Display earned certificates on your profile</div>
                        </div>
                        <Switch 
                          checked={settings.privacy.showCertificates}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({
                              ...prev,
                              privacy: { ...prev.privacy, showCertificates: checked }
                            }))
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Allow Direct Messages</div>
                          <div className="text-sm text-muted-foreground">Let other users send you messages</div>
                        </div>
                        <Switch 
                          checked={settings.privacy.allowMessages}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({
                              ...prev,
                              privacy: { ...prev.privacy, allowMessages: checked }
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Theme Preference</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                        <div>
                          <div className="font-medium">Dark Mode</div>
                          <div className="text-sm text-muted-foreground">Use dark theme for better visibility</div>
                        </div>
                      </div>
                      <Switch 
                        checked={theme === 'dark'}
                        onCheckedChange={toggleTheme}
                      />
                    </div>
                  </div>

                  <Button onClick={handleSaveSettings} disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save Settings'}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Settings */}
            <TabsContent value="billing">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Billing & Subscription</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-semibold">Premium Plan</div>
                      <div className="text-sm text-muted-foreground">$29/month • Next billing: Jan 15, 2024</div>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Payment Method</h3>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5" />
                        <div>
                          <div className="font-medium">•••• •••• •••• 4242</div>
                          <div className="text-sm text-muted-foreground">Expires 12/25</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Update</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Billing History</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2">
                        <span>Dec 15, 2023</span>
                        <span>$29.00</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span>Nov 15, 2023</span>
                        <span>$29.00</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span>Oct 15, 2023</span>
                        <span>$29.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline">Manage Subscription</Button>
                    <Button variant="outline">Download Invoices</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Advanced Settings */}
            <TabsContent value="advanced">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Advanced Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Data Management</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Export Data</div>
                        <div className="text-sm text-muted-foreground">Download a copy of your data</div>
                      </div>
                      <Button variant="outline" onClick={handleExportData}>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600">Danger Zone</h3>
                    <div className="p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/10 dark:border-red-800">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-red-900 dark:text-red-100">Delete Account</div>
                          <div className="text-sm text-red-700 dark:text-red-200">
                            Permanently delete your account and all data
                          </div>
                        </div>
                        <Button 
                          variant="destructive" 
                          onClick={handleDeleteAccount}
                          disabled={isLoading}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Settings;
