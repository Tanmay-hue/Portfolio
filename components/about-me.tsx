"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <Card className="overflow-hidden border-none bg-white/80 backdrop-blur-sm dark:bg-black/50">
      <CardContent className="p-6 md:p-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing a Bachelor of Technology in Computer Science Engineering at the University of Petroleum
              and Energy Studies (UPES), with a specialized focus in Cloud Computing and Virtualization Technology.
              Eager to secure a technical internship to effectively apply academic expertise and gain hands-on
              experience in the field.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
              Skills & Interests
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
              {[
                "Cloud Computing",
                "Web Development",
                "AWS",
                "HTML/CSS",
                "JavaScript",
                "Python",
                "UI/UX Design",
                "Problem Solving",
                "Data Analysis",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800/30 text-blue-800 dark:text-blue-300 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

