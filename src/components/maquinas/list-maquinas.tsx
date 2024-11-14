'use client'
import UseMaquinas from "@/data/hooks/useMaquinas"
import Maquina from "@/data/models/Maquina"
import CardMaquina from "./card-maquina"

export default function ListMaquinas() {

   const { maquinas } = UseMaquinas()

   return (
      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap">
         {maquinas.map((maquina: Maquina) => (
            <CardMaquina key={maquina.id} maquina={maquina} />
         ))}
      </div>
   )
}