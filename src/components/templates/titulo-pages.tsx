import React from "react"
import Link from "next/link"
import { IconSquareRoundedPlus } from "@tabler/icons-react"

export interface TituloPagesProps {
   className?: string,
   link: string,
   titulo: string
}

export default function TituloPages( props: TituloPagesProps) {
   return (
      <div className="flex items-center gap-5 mb-4">
         <h2 className="font-logo text-logo-blue-dark text-2xl">{props.titulo}</h2>
         <Link href={props.link}>
            <IconSquareRoundedPlus size={32}
               className="text-logo-blue-dark hover:text-logo-blue"
               title="Adicionar"
            />
         </Link>
      </div>
   )
}