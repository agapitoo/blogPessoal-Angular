import { Tema } from "./tema"
import { User } from "./user"

export class postagem{
    public id: number
    public titulo: string
    public texto: string
    public date: Date
    public usuario: User
    public tema: Tema
}