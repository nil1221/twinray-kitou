import { cn } from "@/lib/utils"

interface ToriiProps {
  className?: string
}

export function Torii({ className }: ToriiProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      {/* Torii gate structure */}
      <path d="M3 8h18" />
      <path d="M4 6h16" />
      <path d="M6 8v12" />
      <path d="M18 8v12" />
      <path d="M8 10h8" />
    </svg>
  )
}
