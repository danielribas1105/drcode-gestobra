import { useState } from "react"
import Maquina from "../models/Maquina"
import listaMaquinas from "@/data/constants/maquinas"

export default function UseMaquinas() {

   const [maquinas, setMaquinas] = useState<Maquina[]>(listaMaquinas)

   return {
      maquinas
   }
}