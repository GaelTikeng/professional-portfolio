import Link from "next/link";
import { ThemeToggle } from "../molecules/theme-toggle";
import { Typography } from "../ui/typography";
import { Github } from "lucide-react";

interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className="flex justify-between pt-5">
      <Typography className="text-primary-foreground-" variant="h1">
        TL
      </Typography>
			<div className="">
				<ul className="flex space-x-2 ">
					<li className="cursor-pointer text-sm">Notes</li>
					<li className="cursor-pointer text-sm">Work with me</li>
					<li className="cursor-pointer text-sm">Projects</li>
					<li className="cursor-pointer text-sm">
						Blog
					</li>
					<li>Contact me</li>
				</ul>
			</div>
      <div className="flex space-x-2">
        <Link target="_blanck" href="https://github.com/GaelTikeng">
          <Github size={20} className="cursor-pointer" />
        </Link>

        <ThemeToggle />
      </div>
    </div>
  );
}
