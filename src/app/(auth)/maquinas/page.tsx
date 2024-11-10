import { IconSquareRoundedPlus } from "@tabler/icons-react"
import Link from "next/link"

export default function Maquinas() {
   return (
      <div className="flex flex-col">
         <div className="flex items-center gap-5 mb-4">
            <h2 className="text-xl">MÁQUINAS</h2>
            <Link href='/maquinas/addMaquina'>
               <IconSquareRoundedPlus size={32}
                  className="hover:text-blue-700"
                  title="Adicionar Máquina"
               />
            </Link>
         </div>
      </div>
   )
}