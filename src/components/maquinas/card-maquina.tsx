import Link from "next/link"
import Image from "next/image"
import { IconCircleFilled } from "@tabler/icons-react"
import Maquina from "@/data/models/Maquina"

export interface CardMaquinaProps {
   maquina: Maquina
}

export default function CardMaquina(props: CardMaquinaProps) {
   return (
      <Link href={`/maquinas/${props.maquina.id}`}>
         <article className="w-80 h-72 border-2 rounded-md p-2">
            <div className="flex justify-center">
               <Image
                  src={props.maquina.imagemURL}
                  width={200}
                  height={200}
                  alt="Foto da maquina"
               />
            </div>
            <header>{props.maquina.nome}</header>
            <section>
               Código: {props.maquina.id}
            </section>
            <footer className="flex items-center gap-3">
               <IconCircleFilled size={16} color={props.maquina.status ? '#00FF00' : '#FF0000'} />
               <span>{props.maquina.status ? 'Ativa' : 'Paralisada'}</span>
            </footer>
         </article>
      </Link>
   )
}