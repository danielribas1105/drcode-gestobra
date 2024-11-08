import Image from "next/image"
import Avatar from "@/components/ui/avatar"
import Container from "../layout/container"
import logo from "@/../public/images/logo/logo-gestobra-512x512.png"

export default function Header() {

   return (
      <Container className="flex items-center justify-between py-1 px-8 bg-zinc-100">
         <div className="flex gap-5 items-center">
            <Image src={logo} alt={"Logo GestObra"} width={100} height={100} />
            <h1 className="text-4xl font-bold">GestObra</h1>
         </div>
         <div className='flex items-center gap-4'>
            <Avatar />
            <div></div>
         </div>
      </Container>
   )
}