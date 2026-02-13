"use client";

import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Newspaper, Mail } from "lucide-react";

export default function AdminDashboard() {
  const projects = useQuery(api.projects.getProjects, {});
  const posts = useQuery(api.blog.getPosts, { limit: 100 });
  const contacts = useQuery(api.contacts.getContacts, {});

  const stats = [
    {
      name: "Total Projects",
      value: projects?.length ?? 0,
      icon: FileText,
    },
    {
      name: "Blog Posts",
      value: posts?.length ?? 0,
      icon: Newspaper,
    },
    {
      name: "Contact Messages",
      value: contacts?.length ?? 0,
      icon: Mail,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-sans">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome to your admin panel
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium font-sans">
                  {stat.name}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold font-sans">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
