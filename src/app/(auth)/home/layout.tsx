import Aside from "@/components/layout/aside"

export default function HomeLayout({ children }: any) {
   return (
      <div className="flex">
         {children}
         <Aside />
      </div>
   )
}