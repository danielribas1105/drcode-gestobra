import Aside from "@/components/layout/aside"
import Container from "@/components/layout/container"
import Header from "@/components/ui/header"

export default function Layout({ children }: any) {
   return (
      <>
         <Header />
         <Container className="flex gap-5">
            {children}
            <Aside />
         </Container>
      </>
   )
}