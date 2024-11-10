import { IconSquareRoundedPlus } from "@tabler/icons-react"
import Link from "next/link"

export default function Importar() {
   return (
      <div className="flex flex-col">
         <div className="flex items-center gap-5 mb-4">
            <h2 className="text-xl">IMPORTAR DOCUMENTOS</h2>
            <Link href='/maquinas/addMaquina'>
               <IconSquareRoundedPlus size={32}
                  className="hover:text-blue-700"
                  title="Importar"
               />
            </Link>
         </div>
      </div>
   )
}