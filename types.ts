import { LucideIcon } from "lucide-react";

export interface HighlightProps {
  label: string;
  icon: string | LucideIcon;
  color: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
}

export interface ClassType {
  id: string;
  title: string;
  subtitle: string;
  mascot: string; // Emoji char
  ageRange: string;
  duration: string;
  description: string;
  learnings: string[];
  color: string;
}