"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import { LayoutDashboard, FileText, Newspaper, Mail, LogOut, Link2, Inbox } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/admin/projects", icon: FileText },
  { name: "Blog Posts", href: "/admin/blog", icon: Newspaper },
  { name: "Contacts", href: "/admin/contacts", icon: Mail },
  { name: "Referrals", href: "/admin/referrals", icon: Link2 },
  { name: "Submissions", href: "/admin/referrals/submissions", icon: Inbox },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const { user } = useUser();

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col h-screen sticky top-0">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        {user && (
          <p className="text-sm text-muted-foreground">{user.emailAddresses[0]?.emailAddress}</p>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <Button
          onClick={() => signOut()}
          variant="outline"
          className="w-full flex items-center gap-2"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
