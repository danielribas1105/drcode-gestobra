import React from "react"
import { twMerge } from "tailwind-merge"

export interface ContainerProps {
   children: React.ReactNode
   className?: string
}

export default function Container({ children, className }: ContainerProps) {
   const defaultClass = 'w-full mx-auto p-8'
   const combinedClasses = twMerge(defaultClass, className)
   return (
      <div className={combinedClasses}>
         {children}
      </div>
   )
}