import TituloPages from "@/components/templates/titulo-pages"
import ListMaquinas from "@/components/maquinas/list-maquinas"

export default function Maquinas() {
   return (
      <div className="flex flex-col">
         <TituloPages 
            link={"/maquinas/addMaquina"} 
            titulo={"MÁQUINAS"}
         />
         <ListMaquinas/>
      </div>
   )
}