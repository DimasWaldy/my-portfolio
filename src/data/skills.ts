export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
  color: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", icon: "🌐", category: "frontend", color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: "🎨", category: "frontend", color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", icon: "⚡", category: "frontend", color: "from-yellow-400 to-yellow-600" },
  { name: "React", icon: "⚛️", category: "frontend", color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind CSS", icon: "💨", category: "frontend", color: "from-teal-400 to-cyan-500" },
  { name: "Bootstrap", icon: "🅱️", category: "frontend", color: "from-purple-500 to-indigo-600" },
  // Backend
  { name: "PHP", icon: "🐘", category: "backend", color: "from-indigo-400 to-purple-600" },
  { name: "Laravel", icon: "🔥", category: "backend", color: "from-red-500 to-orange-500" },
  { name: "Node.js", icon: "🟢", category: "backend", color: "from-green-400 to-emerald-600" },
  { name: "Next.js", icon: "▲", category: "backend", color: "from-gray-400 to-gray-600" },
  // Database
  { name: "MySQL", icon: "🗄️", category: "database", color: "from-blue-500 to-indigo-500" },
  // Tools
  { name: "Git", icon: "📦", category: "tools", color: "from-orange-400 to-red-500" },
  { name: "GitHub", icon: "🐙", category: "tools", color: "from-gray-500 to-gray-700" },
  { name: "VS Code", icon: "💻", category: "tools", color: "from-blue-500 to-blue-700" },
  { name: "Vercel", icon: "▲", category: "tools", color: "from-gray-300 to-gray-500" },
  { name: "Figma", icon: "🎯", category: "tools", color: "from-pink-400 to-purple-500" },
];

export const skillCategories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "database" as const, label: "Database" },
  { key: "tools" as const, label: "Tools" },
];
