import Link from "next/link"
import { IconCircleFilled } from "@tabler/icons-react"

export default function CardObra(props: any) {
   return (
      <Link href={`/obras/${props.codigo}`}>
         <article className="w-64 h-72 border-2 rounded-md p-2">
            <header>Nome da obra: {props.nome}</header>
            <section>
               Código: {props.codigo}
            </section>
            <footer className="flex items-center gap-3">
               <IconCircleFilled size={16} color={props.ativa ? '#00FF00' : '#FF0000'} />
               <span>{props.ativa ? 'Ativa' : 'Paralisada'}</span>
            </footer>
         </article>
      </Link>
   )
}