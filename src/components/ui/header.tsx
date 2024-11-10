import Image from "next/image"
import Avatar from "@/components/ui/avatar"
import Container from "../layout/container"
import logo from "@/../public/images/logo/logo-gestobra-512x512.png"
import Link from "next/link"

export default function Header() {

   return (
      <Container className="flex items-center justify-between py-1 px-8 bg-zinc-100">
         <Link href={"/home"} className="flex gap-3 items-center" >
            <Image src={logo} alt={"Logo GestObra"} width={100} height={100} />
            <h1 className="text-6xl text-logo-blue-dark font-logo font-semibold">GestObra</h1>
         </Link>
         <div className='flex items-center gap-4'>
            <Avatar />
         </div>
      </Container>
   )
}