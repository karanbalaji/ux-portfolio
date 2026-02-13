"use client";

import { useQuery, useMutation, useAction } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Trash2, RefreshCw } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogPage() {
  const posts = useQuery(api.blog.getPosts, { limit: 100 });
  const deletePost = useMutation(api.blog.deletePost);
  const syncFromRSS = useAction(api.syncBlog.syncFromRSS);
  const syncFromRSSText = useAction(api.syncBlog.syncFromRSSText);

  const [rssXml, setRssXml] = useState("");
  const [syncing, setSyncing] = useState(false);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePost({ id: id as any });
      } catch (error) {
        alert("Failed to delete post");
        console.error(error);
      }
    }
  };

  const handleAutoSync = async () => {
    setSyncing(true);
    try {
      const result = await syncFromRSS();
      if (result.success && 'message' in result) {
        alert(result.message);
      } else if ('error' in result) {
        alert(`Sync failed: ${result.error}`);
      }
    } catch (error) {
      alert("Sync failed: " + error);
    } finally {
      setSyncing(false);
    }
  };

  const handleManualSync = async () => {
    if (!rssXml.trim()) {
      alert("Please paste RSS XML content");
      return;
    }

    setSyncing(true);
    try {
      const result = await syncFromRSSText({ rssXml });
      if (result.success && 'message' in result) {
        alert(result.message);
        setRssXml("");
      } else if ('error' in result) {
        alert(`Sync failed: ${result.error}`);
      }
    } catch (error) {
      alert("Sync failed: " + error);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-sans">Blog Posts</h1>
        <p className="text-muted-foreground mt-1">
          Manage your blog posts from RSS feed
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sync from RSS Feed</CardTitle>
          <CardDescription>
            Update blog posts from https://blog.karanbalaji.com/rss.xml
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button
              onClick={handleAutoSync}
              disabled={syncing}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${syncing ? "animate-spin" : ""}`} />
              Auto Sync from RSS
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              If auto-sync fails (RSS feed blocked), manually paste RSS XML below:
            </p>
            <Textarea
              placeholder="Paste RSS XML content here..."
              value={rssXml}
              onChange={(e) => setRssXml(e.target.value)}
              rows={6}
              className="font-mono text-xs"
            />
            <Button
              onClick={handleManualSync}
              disabled={syncing || !rssXml.trim()}
              variant="secondary"
            >
              Sync from Pasted XML
            </Button>
          </div>
        </CardContent>
      </Card>

      {!posts ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-card rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Published</TableHead>
                <TableHead>Read Time</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post._id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>{post.publishedDate}</TableCell>
                  <TableCell>{post.readTime}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(post._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
