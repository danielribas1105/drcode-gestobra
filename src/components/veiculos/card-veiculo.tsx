import Link from "next/link"
import Image from "next/image"
import { IconCircleFilled } from "@tabler/icons-react"
import Veiculo from "@/data/models/Veiculos"

export interface CardVeiculoProps {
   veiculo: Veiculo
}

export default function CardVeiculo(props: CardVeiculoProps) {
   return (
      <Link href={`/veiculos/${props.veiculo.id}`}>
         <article className="w-80 h-72 border-2 rounded-md p-2">
            <div className="flex justify-center">
               <Image
                  src={props.veiculo.imagemURL}
                  width={200}
                  height={200}
                  alt="Foto da veiculo"
               />
            </div>
            <header>{props.veiculo.nome}</header>
            <section>
               Código: {props.veiculo.id}
            </section>
            <footer className="flex items-center gap-3">
               <IconCircleFilled size={16} color={props.veiculo.status ? '#00FF00' : '#FF0000'} />
               <span>{props.veiculo.status ? 'Ativa' : 'Paralisada'}</span>
            </footer>
         </article>
      </Link>
   )
}