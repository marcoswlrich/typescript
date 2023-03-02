// alias

/*
 * o alias de tipo apenas cria um apelido para 
 * um tipo existente (ainda que anônimo). 
 * O alias não gera um tipo, 
 * só dá um novo nome.
 */

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
}