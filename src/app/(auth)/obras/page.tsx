import ListObras from "@/components/obras/list-obras"
import TituloPages from "@/components/templates/titulo-pages"

export default function Obras() {
   return (
      <div className="flex flex-col">
         <TituloPages 
            link={"/obras/addObra"} 
            titulo={"OBRAS"}
         />
         <ListObras />
      </div>
   )
}