function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;

}

console.log(add(1, 5));
console.log(add('a', 'b'));

type PessoaT = {tipo: 'pessoa'; nome: string};
type Animal = {tipo: 'animal'; cor: string};
type PessoaOuAnimal = PessoaT | Animal;

class Aluno implements PessoaT {
  tipo: "pessoa" = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}

mostraNome(new Aluno('João'));
mostraNome({tipo: 'animal', cor: 'rosa'});