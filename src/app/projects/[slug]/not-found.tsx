import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4 px-4">
        <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50">
          Project Not Found
        </h2>
        <p className="text-grey-600 dark:text-grey-400">
          The project you're looking for doesn't exist.
        </p>
        <Link
          href="/#projects"
          className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}
