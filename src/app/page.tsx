import Link from "next/link"
import { IconTruckDelivery } from "@tabler/icons-react"

export default function Login() {
   return (
      <div className="flex flex-col gap-3 items-center py-10 h-screen">
      <IconTruckDelivery size={120} stroke={0.5} className="text-zinc-500" />
      <h1 className="font-black text-4xl">Easy Logistics</h1>
      <input id="login"
        type="text"
        placeholder="E-mail"
        className="py-2 px-5 border-2 border-zinc-400 rounded-md text-xl"
      />
      <input id="senha"
        type="text"
        placeholder="Senha"
        className="py-2 px-5 border-2 border-zinc-400 rounded-md text-xl"
      />
      <Link href='/home' 
        className="bg-blue-700 px-10 py-2 text-white rounded-md hover:bg-blue-900">
        Entrar
      </Link>
    </div>
   )
}
