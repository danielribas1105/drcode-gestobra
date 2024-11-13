import TituloPages from "@/components/templates/titulo-pages"

export default function Maquinas() {
   return (
      <div className="flex flex-col">
         <TituloPages 
            link={"/maquinas/addMaquina"} 
            titulo={"MÁQUINAS"}
         />
      </div>
   )
}