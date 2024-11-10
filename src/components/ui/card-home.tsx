import React, { ElementType } from "react"
import Link from "next/link"

export interface CardProps {
   className?: string,
   link: string,
   titulo: string,
   descricao: string,
   icon: ElementType,
}

export default function CardHome(props: CardProps) {
   return (
      <Link href={props.link}>
         <div className="flex flex-col gap-4 w-80 h-48 border-2 border-logo-blue-dark rounded-md p-2">
            <div className="flex gap-5 justify-between items-center">
               <div className="text-2xl text-logo-blue-dark font-bold">{props.titulo}</div>
               <props.icon size={60} color='#51a41e'/>
            </div>
            <div>{props.descricao}</div>
         </div>
      </Link>
   )
}