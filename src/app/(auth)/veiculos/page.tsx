import TituloPages from "@/components/templates/titulo-pages"
import ListVeiculos from "@/components/veiculos/list-veiculos"

export default function Veiculos() {
   return (
      <div className="flex flex-col">
         <TituloPages
            link={"/veiculos/addVeiculos"}
            titulo={"VEÍCULOS"}
         />
         <ListVeiculos />
      </div>
   )
}