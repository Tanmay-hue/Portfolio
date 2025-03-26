"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactInfo() {
  return (
    <Card className="overflow-hidden border-none bg-white/80 backdrop-blur-sm dark:bg-black/50">
      <CardContent className="p-6 md:p-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="mailto:singhtanmay322@gmail.com" className="group">
              <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20 group-hover:-translate-y-1">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">singhtanmay322@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="tel:8383099087" className="group">
              <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20 group-hover:-translate-y-1">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">8383099087</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://maps.app.goo.gl/New+Delhi+India"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20 group-hover:-translate-y-1">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">New Delhi, India</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://www.linkedin.com/in/tanmay-singh-905428244/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20 group-hover:-translate-y-1">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">tanmay-singh-905428244</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          <div className="pt-4">
            <h3 className="text-xl font-bold mb-3">Get In Touch</h3>
            <div className="flex gap-3">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Call Me
              </Button>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

