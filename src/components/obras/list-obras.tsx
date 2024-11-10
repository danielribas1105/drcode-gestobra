import CardObra from "../models/card-obra"

const arrayConstructions = [
   { name: 'Barra', code: '1234', ativa: true },
   { name: 'Recreio', code: '4832', ativa: false },
   { name: 'Penha', code: '0098', ativa: true },
   { name: 'Olaria', code: '9823', ativa: true }
]

export default function ListObras() {
   return (
      <div className="flex flex-col md:flex-row">
         {arrayConstructions.map((item, index) => (
            <CardObra key={index} nome={item.name} codigo={item.code} ativa={item.ativa} />
         ))}
      </div>
   )
}