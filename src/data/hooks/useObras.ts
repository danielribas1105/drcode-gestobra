import { useState } from "react"
import Obra from "../models/Obra"
import listaObras from "@/data/constants/obras"

export default function UseObras() {

   const [obras, setObras] = useState<Obra[]>(listaObras)

   return {
      obras
   }
}