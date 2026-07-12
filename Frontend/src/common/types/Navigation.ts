import { LucideIcon } from "lucide-react";

export interface NavigationItem {
    title: string;
    icon: LucideIcon;
    path: string;
}

export interface NavigationGroup {
    title: string;
    icon: LucideIcon;
    children: NavigationItem[];
}

export type Navigation = NavigationItem | NavigationGroup;