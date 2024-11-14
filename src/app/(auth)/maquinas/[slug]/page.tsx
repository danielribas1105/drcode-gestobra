export default function InfoMaquina({ params }: { params: { slug: number } }) {
   return (
      <>
         <div>Informações sobre a maquina...</div>
         <div>Máquina código: {params.slug}</div>
      </>
   )
}