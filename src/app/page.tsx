import Link from "next/link"
import Image from "next/image"
import logo from '@/../public/images/logo/logo-gestobra-512x512.png'

export default function Login() {
   return (
      <div className="flex flex-col gap-3 items-center py-10 h-screen">
         <Image src={logo} alt={"Logo GestObra"} width={300} height={300}/>
         <h1 className="font-black text-4xl">GestObra</h1>
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
