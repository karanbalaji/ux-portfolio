export default function ProjectLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
        <p className="text-grey-600 dark:text-grey-400">Loading project...</p>
      </div>
    </div>
  );
}
