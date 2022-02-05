interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Marcos',
  sobrenome: 'Wlrich',
  enderecos: ['Av. Brasil'],
  idade: 30,
};

pessoa.idade = 31;
console.log(pessoa);
