export default function InfoObra({ params }: { params: { slug: number } }) {
   return (
      <>
         <div>Informações sobre a obra...</div>
         <div>Obra código: {params.slug}</div>
      </>
   )
}