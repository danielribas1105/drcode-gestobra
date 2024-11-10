import Link from "next/link"
import Image from "next/image"
import logo from '@/../public/images/logo/logo-gestobra-512x512.png'
import InputLogin from "@/components/ui/input-login"

export default function Login() {
   return (
      <div className="flex flex-col gap-3 items-center py-10 h-screen">
         <Image src={logo} alt={"Logo GestObra"} width={300} height={300}/>
         <h1 className="font-logo font-black text-5xl">GestObra</h1>
         <InputLogin 
            id="login" 
            type="email" 
            placeholder="Digite seu login"
         />
         <InputLogin 
            id="senha"
            type="password" 
            placeholder="Digite sua senha"
         />
         <Link href='/home'
            className="bg-logo-blue-dark px-10 py-2 text-white rounded-md hover:bg-logo-blue">
            Entrar
         </Link>
      </div>
   )
}
