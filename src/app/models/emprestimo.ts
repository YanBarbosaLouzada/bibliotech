import { Livro } from "./livro"

export interface Emprestimo {
    id?:string
    nomeLeitor:string
    livro: Livro
    dataEmprestimo: string
    statusEmprestimo: string
    email:string
    telefone:string         

  }