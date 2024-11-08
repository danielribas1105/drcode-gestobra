import { IconCodeCircle } from "@tabler/icons-react"

export default function Footer() {
   return (
      <footer>
         <div className="flex flex-col gap-1 justify-center py-3">
            <span>Desenvolvido por</span>
            <div className="flex">
               <IconCodeCircle className="text-purple-500 mr-1" />
               <strong>DRCODE</strong>
            </div>
         </div>
      </footer>
   )
}