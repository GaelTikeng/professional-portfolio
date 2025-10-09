import Link from "next/link";
import { Typography } from "../ui/typography";
import { Github } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";

interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const navItems = [
    { name: "Profile", href: "/profile" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Connect", href: "/connect" },
  ];
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Typography className="text-white font-bold text-lg" variant="h3">
                  TL
                </Typography>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
           
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-accent/50 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
