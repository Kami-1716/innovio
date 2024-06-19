"use client";

import { cn } from "@/lib/utils";
import {
  Bot,
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col space-y-4 p-4 h-full text-white bg-[#111827]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-2">
            <Bot size="2xl" />
          </div>
          <h1 className="text-2xl font-bold">Innovio</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="textsm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-[#1F2937] rounded-md transition-colors duration-200 ease-in-out"
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                <span>{route.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
