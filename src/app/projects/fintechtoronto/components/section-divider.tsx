interface SectionDividerProps {
  variant?: "default" | "gradient" | "dots"
  className?: string
}

export default function SectionDivider({ 
  variant = "default", 
  className = "" 
}: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div className={`my-16 ${className}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-grey-300 dark:via-grey-600 to-transparent" />
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className={`flex justify-center items-center my-16 ${className}`}>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-primary/30"></div>
          <div className="w-2 h-2 rounded-full bg-primary/60"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary/60"></div>
          <div className="w-2 h-2 rounded-full bg-primary/30"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={`my-16 ${className}`}>
      <div className="h-px bg-grey-200 dark:bg-grey-700" />
    </div>
  )
} 