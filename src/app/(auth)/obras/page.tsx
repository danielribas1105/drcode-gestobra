import Link from "next/link"
import { IconSquareRoundedPlus } from "@tabler/icons-react"
import ListObras from "@/components/obras/list-obras"

export default function Obras() {
   return (
      <div className="flex flex-col">
         <div className="flex items-center gap-5 mb-4">
            <h2 className="text-xl">OBRAS</h2>
            <Link href='/obras/addObra'>
               <IconSquareRoundedPlus size={32}
                  className="hover:text-blue-700"
                  title="Adicionar obra"
               />
            </Link>
         </div>
         <ListObras />
      </div>
   )
}