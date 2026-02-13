"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { ProjectEditor } from "@/components/admin/project-editor";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const isNewProject = id === "new";

  // Only query for existing projects, not when creating new
  const project = useQuery(
    api.projects.getProjectById,
    isNewProject ? "skip" : { id: id as any }
  );

  const createProject = useMutation(api.projects.createProject);
  const updateProject = useMutation(api.projects.updateProject);

  const handleSave = async (data: any) => {
    try {
      if (isNewProject) {
        // Create new project
        await createProject(data);
      } else {
        // Update existing project
        await updateProject({ id: id as any, ...data });
      }
      router.push("/admin/projects");
    } catch (error) {
      alert(isNewProject ? "Failed to create project" : "Failed to update project");
      console.error(error);
    }
  };

  const handleCancel = () => {
    router.push("/admin/projects");
  };

  // Show loading only for existing projects
  if (!isNewProject && project === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-sans">
        {isNewProject ? "Create New Project" : "Edit Project"}
      </h1>
      <ProjectEditor
        project={isNewProject ? undefined : project}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}
