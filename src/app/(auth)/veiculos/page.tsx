import TituloPages from "@/components/templates/titulo-pages"

export default function Veiculos() {
   return (
      <div className="flex flex-col">
         <TituloPages 
            link={"/veiculos/addVeiculos"} 
            titulo={"VEÍCULOS"}
         />
      </div>
   )
}