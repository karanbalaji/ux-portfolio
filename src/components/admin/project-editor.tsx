"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectEditorProps {
  project?: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}

export function ProjectEditor({ project, onSave, onCancel }: ProjectEditorProps) {
  const [formData, setFormData] = useState({
    slug: project?.slug || "",
    title: project?.title || "",
    description: project?.description || "",
    coverImage: project?.coverImage || "",
    liveUrl: project?.liveUrl || "",
    githubUrl: project?.githubUrl || "",
    figmaUrl: project?.figmaUrl || "",
    order: project?.order || 0,
    toc: project?.toc || [],
    sections: project?.sections || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList>
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="sections">Sections (JSON)</TabsTrigger>
          <TabsTrigger value="toc">Table of Contents (JSON)</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="coverImage">Cover Image URL</Label>
                <Input
                  id="coverImage"
                  value={formData.coverImage}
                  onChange={(e) =>
                    setFormData({ ...formData, coverImage: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="liveUrl">Live URL</Label>
                  <Input
                    id="liveUrl"
                    value={formData.liveUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, liveUrl: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="githubUrl">GitHub URL (Optional)</Label>
                  <Input
                    id="githubUrl"
                    value={formData.githubUrl || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, githubUrl: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="figmaUrl">Figma URL (Optional)</Label>
                  <Input
                    id="figmaUrl"
                    value={formData.figmaUrl || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, figmaUrl: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="order">Display Order</Label>
                <Input
                  id="order"
                  type="number"
                  value={formData.order}
                  onChange={(e) =>
                    setFormData({ ...formData, order: parseInt(e.target.value) || 0 })
                  }
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sections">
          <Card>
            <CardHeader>
              <CardTitle>Sections (JSON)</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={JSON.stringify(formData.sections, null, 2)}
                onChange={(e) => {
                  try {
                    setFormData({ ...formData, sections: JSON.parse(e.target.value) });
                  } catch (e) {
                    // Invalid JSON - don't update
                  }
                }}
                rows={20}
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Edit the sections array as JSON. Each section has a type and content field.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="toc">
          <Card>
            <CardHeader>
              <CardTitle>Table of Contents (JSON)</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={JSON.stringify(formData.toc, null, 2)}
                onChange={(e) => {
                  try {
                    setFormData({ ...formData, toc: JSON.parse(e.target.value) });
                  } catch (e) {
                    // Invalid JSON - don't update
                  }
                }}
                rows={15}
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Edit the table of contents structure as JSON.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save Project</Button>
      </div>
    </form>
  );
}
