export default function InfoVeiculo({ params }: { params: { slug: number } }) {
   return (
      <>
         <div>Informações sobre o veículo...</div>
         <div>Veículo código: {params.slug}</div>
      </>
   )
}