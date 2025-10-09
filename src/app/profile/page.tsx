import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, MessageCircle, Github, Mail, ArrowLeft, MapPin, Calendar, Briefcase, Code, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation back */}
      {/* <div className="fixed top-6 left-6 z-10">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200 text-sm shadow-lg hover:shadow-xl"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div> */}

      <div className="flex items-center justify-center min-h-screen p-4 pt-20">
        <div className="w-full max-w-2xl">
          {/* Main Profile Card */}
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              {/* Profile Header */}
              <div className="text-center space-y-6 mb-8">
                {/* Avatar with gradient border */}
                <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-sm opacity-75"></div>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-background shadow-xl">
                    {/* <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-4xl md:text-5xl font-bold text-white">TG</span>
                    </div> */}
                    <Image
                      src="/images/gael.jpg"
                      alt="Gael Profile Picture"
                      className="w-full h-full object-cover"
                      width={160}
                      height={160}
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Tikeng Gael
                  </h1>
                  <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
                    <Code className="w-5 h-5" />
                    <span>Software Engineer & Entrepreneur</span>
                  </div>
                </div>
              </div>

              {/* Stats/Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50">
                  <Briefcase className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                  <div className="text-sm font-medium">Experience</div>
                  <div className="text-xs text-muted-foreground">3+ years</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50">
                  <Star className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                  <div className="text-sm font-medium">Projects</div>
                  <div className="text-xs text-muted-foreground">10+ completed</div>
                </div>
                <div className="col-span-2 md:col-span-1 text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-green-500" />
                  <div className="text-sm font-medium">Location</div>
                  <div className="text-xs text-muted-foreground">Cameroon</div>
                </div>
              </div>

              {/* Bio */}
              <div className="text-center mb-8">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Passionate entrepreneur & startup founder with expertise in fullstack development. 
                  Building innovative solutions that make a difference.
                </p>
              </div>

              {/* Social Media Buttons */}
              <div className="grid gap-4 md:grid-cols-2">
                <Link
                  href="https://linkedin.com/in/gaeltikeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-sm opacity-90">Professional Network</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://github.com/gmarvis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-sm opacity-90">Code Repository</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/+237672028854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm opacity-90">Quick Message</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="mailto:tikenglambougaelinho@gmail.com"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm opacity-90">Direct Contact</div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Call to Action */}
              {/* <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Explore My Portfolio</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div> */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}