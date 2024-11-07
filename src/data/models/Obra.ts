export default interface Obra {
    id: number
    nome: string
    descricao: string
    endereco: string
    bairro: string
    cidade: string
    estado: string
    orcamento: number
    status: 'ativa | inativa | paralisada'
    imagemURL: string
}