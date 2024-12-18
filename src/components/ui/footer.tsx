import { IconCode, IconHeart, IconMug } from "@tabler/icons-react"
import Container from "../layout/container"

export default function Footer() {
   return (
      <Container className="flex-col text-lg mt-5">
         <div className="flex gap-2 items-center justify-center md:justify-start">
            <p>Desenvolvido com</p>
            <IconHeart size={20} color="#ff0000" />
            <p>e</p>
            <IconMug size={22} color="#b5842a" />
            <p>por</p>
            <IconCode size={22} color="#5e17eb" />
            <p>DRCode</p>
         </div>
         <p>@2024 - Todos os direitos reservados</p>
      </Container>
   )
}