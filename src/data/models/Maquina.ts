export default interface Maquina {
   id: number,
   nome: string,
   ano_fabricacao: number,
   tipo: string,
   robustez: boolean,
   capacidade_carga: string,
   potencia_motor: string,
   locomocao: string,
   versatilidade: string,
   cabine_protegida: boolean,
   sistema_hidraulico: boolean,
   status: 'ativa' | 'inativa',
   imagemURL: string
}