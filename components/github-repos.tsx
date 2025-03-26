"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Github, Star, GitFork, ExternalLink, Search, ImageIcon } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  updated_at: string
  screenshot?: string
}

export default function GitHubRepos({ username = "" }: { username?: string }) {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [inputUsername, setInputUsername] = useState(username)
  const [searchUsername, setSearchUsername] = useState(username)
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null)

  useEffect(() => {
    if (searchUsername) {
      fetchRepos(searchUsername)
    } else {
      setLoading(false)
    }
  }, [searchUsername])

  const fetchRepos = async (user: string) => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`)

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const data = await response.json()

      // Add placeholder screenshots for demo purposes
      const reposWithScreenshots = data.map((repo: Repository, index: number) => ({
        ...repo,
        screenshot: `/placeholder.svg?height=600&width=800&text=Repository+Screenshot+${index + 1}`,
      }))

      setRepos(reposWithScreenshots)
      if (reposWithScreenshots.length > 0) {
        setSelectedRepo(reposWithScreenshots[0])
      }
    } catch (err) {
      console.error("Error fetching GitHub repos:", err)
      setError("Failed to fetch repositories. Please check the username and try again.")
      setRepos([])
      setSelectedRepo(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchUsername(inputUsername)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
      HTML: "bg-orange-500",
      CSS: "bg-purple-500",
      "C#": "bg-teal-500",
      PHP: "bg-indigo-500",
      Ruby: "bg-red-600",
      Go: "bg-cyan-500",
      Swift: "bg-pink-500",
      Kotlin: "bg-amber-500",
    }

    return colors[language] || "bg-gray-500"
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          placeholder="Enter GitHub username"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>

      {error && (
        <div className="p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 rounded-lg">{error}</div>
      )}

      {loading ? (
        <div className="grid gap-6">
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-1/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : repos.length > 0 ? (
        <motion.div
          className="grid gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Repository Screenshot Display */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Repository Screenshot
              </CardTitle>
              <CardDescription>Visual preview of the selected repository</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {selectedRepo ? (
                <div className="relative h-[300px] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <Image
                    src={
                      selectedRepo.screenshot || "/placeholder.svg?height=600&width=800&text=No+Screenshot+Available"
                    }
                    alt={`Screenshot of ${selectedRepo.name}`}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold">{selectedRepo.name}</h3>
                    <p className="text-white/80 text-sm truncate">{selectedRepo.description}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-[300px] bg-slate-100 dark:bg-slate-800">
                  <div className="text-center p-6">
                    <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Select a repository to view its screenshot</p>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="bg-muted/50 p-3 flex justify-between">
              <div className="text-sm text-muted-foreground">Click on a repository below to view its screenshot</div>
              {selectedRepo && (
                <Button variant="outline" size="sm" asChild>
                  <a href={selectedRepo.html_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* Repository List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full flex flex-col transition-all duration-300 cursor-pointer ${selectedRepo?.id === repo.id ? "ring-2 ring-primary" : "hover:shadow-md"}`}
                  onClick={() => setSelectedRepo(repo)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">
                        <span className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          {repo.name}
                        </span>
                      </CardTitle>
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span className={`h-3 w-3 rounded-full ${getLanguageColor(repo.language)}`}></span>
                          <span className="text-xs text-muted-foreground">{repo.language}</span>
                        </div>
                      )}
                    </div>
                    <CardDescription className="line-clamp-2 h-10">
                      {repo.description || "No description provided"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" />
                        {repo.forks_count}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">Updated {formatDate(repo.updated_at)}</div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-primary"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedRepo(repo)
                      }}
                    >
                      <ImageIcon className="h-3.5 w-3.5 mr-2" />
                      View Screenshot
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : searchUsername ? (
        <div className="text-center p-8">
          <Github className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-bold mb-2">No repositories found</h3>
          <p className="text-muted-foreground">
            We couldn't find any repositories for the username "{searchUsername}".
          </p>
        </div>
      ) : (
        <div className="text-center p-8 border-2 border-dashed rounded-lg border-muted">
          <Github className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-bold mb-2">Connect Your GitHub</h3>
          <p className="text-muted-foreground mb-4">
            Enter your GitHub username to display your repositories and screenshots here.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg max-w-md mx-auto">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Repository Screenshots
            </h4>
            <p className="text-sm text-muted-foreground">
              Once you connect your GitHub account, this section will display screenshots of your repositories. You can
              upload custom screenshots for each repository to showcase your work.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

