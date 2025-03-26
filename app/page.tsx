import GitHubRepos from "@/components/github-repos"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProfileHeader from "@/components/profile-header"
import ContactInfo from "@/components/contact-info"
import AboutMe from "@/components/about-me"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <ProfileHeader />

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="github">GitHub</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <AboutMe />
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <ContactInfo />
          </TabsContent>

          <TabsContent value="github" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">My GitHub Repositories</h2>
                <GitHubRepos username="your-github-username" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

