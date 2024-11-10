import CardHome from "@/components/ui/card-home"
import { IconBarrierBlock, IconFileAnalytics, IconFileArrowLeft, IconMap, IconTractor, IconTruck } from "@tabler/icons-react"

export default function Home() {
   return (
      <div className="flex flex-col gap-5 basis-3/4">
         <h1 className="font-logo font-black text-2xl text-logo-blue-dark">Bem-vindo ...usuário!</h1>
         <div className="flex gap-16 flex-wrap">
            <CardHome 
               link="/obras"
               titulo="OBRAS"
               descricao="Acompanhe o andamento de todas as obras" 
               icon={IconBarrierBlock} 
            />
            <CardHome 
               link="/maquinas"
               titulo="MÁQUINAS" 
               descricao="Máquinas e equipamentos" 
               icon={IconTractor} 
            />
            <CardHome 
               link="/veiculos"
               titulo="VEÍCULOS" 
               descricao="Veículos"
               icon={IconTruck} 
            />
            <CardHome 
               link="/relatorios"
               titulo="RELATÓRIOS" 
               descricao="Módulo de relatórios" 
               icon={IconFileAnalytics} 
            />
            <CardHome 
               link="/importar"
               titulo="IMPORTAR" 
               descricao="Módulo para importação de arquivos" 
               icon={IconFileArrowLeft} 
            />
            <CardHome 
               link="/mapa"
               titulo="MAPA" 
               descricao="Acompanhar deslocamento" 
               icon={IconMap} 
            />
         </div>
      </div>
   )
}