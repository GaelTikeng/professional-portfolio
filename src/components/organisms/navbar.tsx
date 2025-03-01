import Link from "next/link";
import { Typography } from "../ui/typography";
import { Github } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";

interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const items = ["Notes", "Projects", "Blog", "Work with me", "Contact"];
  return (
    <div className="flex justify-between pt-5 sticky z-50 opacity-70">
      <Typography className=" my-auto" variant="h1">
        TL
      </Typography>
      <div className=" my-auto">
        <ul className="flex space-x-8 ">
          {items.map((c) => (
            <li className="cursor-pointer text-sm hover:text-blue-300" key={c}>
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <Link target="_blanck" href="https://github.com/GaelTikeng">
          <Github size={20} className="cursor-pointer my-auto " />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}
