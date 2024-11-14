import { useState } from "react"
import Veiculo from "../models/Veiculos"
import listaVeiculos from "@/data/constants/veiculos"

export default function UseVeiculos() {

   const [veiculos, setVeiculos] = useState<Veiculo[]>(listaVeiculos)

   return {
      veiculos
   }
}