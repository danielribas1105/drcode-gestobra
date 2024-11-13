'use client'
import UseObras from "@/data/hooks/useObras"
import Obra from "@/data/models/Obra"
import CardObra from "./card-obra"

export default function ListObras() {

   const { obras } = UseObras()

   return (
      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap">
         {obras.map((obra: Obra) => (
            <CardObra key={obra.id} obra={obra} />
         ))}
      </div>
   )
}