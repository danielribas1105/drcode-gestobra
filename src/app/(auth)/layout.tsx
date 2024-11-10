import Container from "@/components/layout/container"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

export default function PagesLayout({ children }: any) {
   return (
      <>
         <Header />
         <Container className="flex-col md:flex-row mt-5">
            {children}
         </Container>
         <Footer />
      </>
   )
}