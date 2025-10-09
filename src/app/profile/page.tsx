"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  MessageCircle,
  Github,
  Mail,
  ArrowLeft,
  MapPin,
	Briefcase,
  Code,
  Star,
  Download,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Contact information
  const contactInfo = {
    name: "Tikeng Gael",
    title: "Software Engineer & Entrepreneur",
    phone: "+237672028854",
    email: "tikenglambougaelinho@gmail.com",
    website: typeof window !== "undefined" ? window.location.origin : "",
    linkedin: "https://linkedin.com/in/gaeltikeng",
    github: "https://github.com/gaeltikeng",
    organization: "Tech Entrepreneur",
    address: "Cameroon",
  };

  // Generate vCard content
  const generateVCard = () => {
    const vCard = `BEGIN:VCARD
		VERSION:3.0
		FN:${contactInfo.name}
		N:Gael;Tikeng;;;
		ORG:${contactInfo.organization}
		TITLE:${contactInfo.title}
		TEL;TYPE=CELL:${contactInfo.phone}
		EMAIL:${contactInfo.email}
		URL:${contactInfo.website}
		URL;TYPE=LinkedIn:${contactInfo.linkedin}
		URL;TYPE=GitHub:${contactInfo.github}
		ADR;TYPE=HOME:;;${contactInfo.address};;;;
		NOTE:Passionate entrepreneur & startup founder with expertise in fullstack development. Building innovative solutions that make a difference.
		END:VCARD`;
    return vCard;
  };

  // Save contact function
  const saveContact = async () => {
    setIsDownloading(true);

    try {
      const vCardContent = generateVCard();

      // Check if Web Share API is supported and device can handle vCard
      if (navigator.share && navigator.canShare) {
        try {
          const file = new File(
            [vCardContent],
            `${contactInfo.name.replace(" ", "_")}.vcf`,
            {
              type: "text/vcard",
            }
          );

          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: `Save ${contactInfo.name}'s Contact`,
              text: `Save ${contactInfo.name}'s contact information to your phone`,
              files: [file],
            });
            return;
          }
        } catch (shareError) {
          console.log("Web Share failed, falling back to download");
        }
      }

      // Fallback: Create download link
      const blob = new Blob([vCardContent], { type: "text/vcard" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${contactInfo.name.replace(" ", "_")}.vcf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error saving contact:", error);
      alert("Sorry, there was an error saving the contact. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation back */}
      <div className="fixed top-6 left-6 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200 text-sm shadow-lg hover:shadow-xl"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

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
                  <div className="text-xs text-muted-foreground">
                    10+ completed
                  </div>
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
                  Passionate entrepreneur & startup founder with expertise in
                  fullstack development. Building innovative solutions that make
                  a difference.
                </p>
              </div>

              {/* Social Media & Contact Buttons */}
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <Link
                  href="https://linkedin.com/in/gaeltikeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-4 sm:p-6 text-white transition-all duration-300 active:scale-95 sm:hover:scale-105 hover:shadow-xl min-h-[80px] sm:min-h-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex-shrink-0">
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base sm:text-lg truncate">LinkedIn</div>
                      <div className="text-xs sm:text-sm opacity-90 truncate">
                        Professional Network
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/+237672028854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-4 sm:p-6 text-white transition-all duration-300 active:scale-95 sm:hover:scale-105 hover:shadow-xl min-h-[80px] sm:min-h-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex-shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base sm:text-lg truncate">WhatsApp</div>
                      <div className="text-xs sm:text-sm opacity-90 truncate">Quick Message</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="mailto:tikenglambougaelinho@gmail.com"
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 p-4 sm:p-6 text-white transition-all duration-300 active:scale-95 sm:hover:scale-105 hover:shadow-xl min-h-[80px] sm:min-h-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base sm:text-lg truncate">Email</div>
                      <div className="text-xs sm:text-sm opacity-90 truncate">Direct Contact</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://github.com/gaeltikeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 text-white transition-all duration-300 active:scale-95 sm:hover:scale-105 hover:shadow-xl min-h-[80px] sm:min-h-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex-shrink-0">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base sm:text-lg truncate">GitHub</div>
                      <div className="text-xs sm:text-sm opacity-90 truncate">Code Repository</div>
                    </div>
                  </div>
                </Link>

                {/* Enhanced Save Contact Button */}
                <button
                  onClick={saveContact}
                  disabled={isDownloading}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 p-4 sm:p-6 text-white transition-all duration-300 active:scale-95 sm:hover:scale-105 hover:shadow-xl disabled:opacity-75 disabled:cursor-not-allowed disabled:active:scale-100 disabled:sm:hover:scale-100 col-span-1 sm:col-span-2 min-h-[80px] sm:min-h-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex-shrink-0">
                      {isDownloading ? (
                        <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <UserPlus className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </div>
                    <div className="text-center sm:text-left flex-1 min-w-0">
                      <div className="font-semibold text-base sm:text-lg truncate">
                        {isDownloading ? "Saving Contact..." : "Save Contact"}
                      </div>
                      <div className="text-xs sm:text-sm opacity-90 truncate">
                        Add to your phone contacts
                      </div>
                    </div>
                    {!isDownloading && (
                      <div className="hidden sm:block p-2 rounded-lg bg-white/10 flex-shrink-0">
                        <Download className="w-4 h-4 opacity-75" />
                      </div>
                    )}
                  </div>
                </button>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Explore My Portfolio</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
