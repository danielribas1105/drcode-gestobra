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
      //<div className="flex flex-col h-screen">
      //    <Header/>
      //    <div className="flex flex-grow">
      //        <MenuAside/>
      //        <main className="w-max px-12 py-3">
      //            {children}
      //        </main>
      //    </div>
      //</div>
   )
}