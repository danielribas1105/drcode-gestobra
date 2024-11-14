'use client'
import UseVeiculos from "@/data/hooks/useVeiculos"
import Veiculo from "@/data/models/Veiculos"
import CardVeiculo from "./card-veiculo"

export default function ListVeiculos() {

   const { veiculos } = UseVeiculos()

   return (
      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap">
         {veiculos.map((veiculo: Veiculo) => (
            <CardVeiculo key={veiculo.id} veiculo={veiculo} />
         ))}
      </div>
   )
}