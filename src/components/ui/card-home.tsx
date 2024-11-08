import React, { ElementType } from "react"
import Link from "next/link"

export interface CardProps {
   className?: string,
   titulo: string,
   descricao: string,
   icon: ElementType,
}

export default function CardHome(props: CardProps) {
   return (
      <Link href={"/obras"}>
         <div className="flex flex-col gap-4 w-80 h-48 border-2 rounded-md p-2">
            <div className="flex gap-5 justify-between items-center">
               <div className="text-2xl font-bold">{props.titulo}</div>
               <props.icon size={60} />
            </div>
            <div>{props.descricao}</div>
         </div>
      </Link>
   )
}