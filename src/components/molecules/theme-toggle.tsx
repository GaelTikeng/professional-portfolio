import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  title?: string;
}

export function ThemeToggle(props: ThemeToggleProps) {
  return (
		<div className="flex cursor-pointer">
			<Sun size={20} />
			{/* <Moon size={20} /> */}
		</div>
	)
}
