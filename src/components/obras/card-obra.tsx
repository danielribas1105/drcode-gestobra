import Link from "next/link"
import Image from "next/image"
import { IconCircleFilled } from "@tabler/icons-react"
import Obra from "@/data/models/Obra"

export interface CardObraProps {
   obra: Obra
}

export default function CardObra(props: CardObraProps) {
   return (
      <Link href={`/obras/${props.obra.id}`}>
         <article className="w-80 h-72 border-2 rounded-md p-2">
            <div className="flex justify-center">
               <Image
                  src={props.obra.imagemURL}
                  width={200}
                  height={200}
                  alt="Foto da obra"
               />
            </div>
            <header>{props.obra.nome}</header>
            <section>
               Código: {props.obra.id}
            </section>
            <footer className="flex items-center gap-3">
               <IconCircleFilled size={16} color={props.obra.status ? '#00FF00' : '#FF0000'} />
               <span>{props.obra.status ? 'Ativa' : 'Paralisada'}</span>
            </footer>
         </article>
      </Link>
   )
}