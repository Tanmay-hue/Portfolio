"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function ProfileHeader() {
  return (
    <Card className="w-full overflow-hidden border-none bg-white/80 backdrop-blur-sm dark:bg-black/50">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-32 w-32 border-4 border-primary">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Tanmay Singh" />
              <AvatarFallback className="text-4xl">TS</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="space-y-4 text-center md:text-left">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Tanmay Singh
              </h1>
              <p className="text-xl text-muted-foreground mt-1">Computer Science Engineering Student</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              <Badge
                variant="outline"
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800"
              >
                Cloud Computing
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800"
              >
                Web Development
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-800"
              >
                AWS
              </Badge>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

