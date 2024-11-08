import CardHome from "@/components/ui/card-home"
import { IconBarrierBlock, IconDashboard } from "@tabler/icons-react"

export default function Home() {
   return (
      <div className="flex flex-col gap-5">
         <h1 className="font-black text-xl">Bem-vindo ao Easy Loistics!</h1>
         <div className="flex gap-5">
            <CardHome 
               titulo={"OBRAS"} 
               descricao={"Acompanhe o andamento de todas as obras"} 
               icon={IconBarrierBlock} 
            />
            <CardHome 
               titulo={"MÁQUINAS"} 
               descricao={"Máquinas e equipamentos"} 
               icon={IconBarrierBlock} 
            />
            <CardHome 
               titulo={"VEÍCULOS"} 
               descricao={"Veículos"} 
               icon={IconBarrierBlock} 
            />
            <CardHome 
               titulo={"Relatórios"} 
               descricao={"Módulo de relatórios"} 
               icon={IconBarrierBlock} 
            />
         </div>
      </div>
   )
}