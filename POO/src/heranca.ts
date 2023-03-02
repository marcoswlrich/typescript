class Pessoa {
  static IdadePadrao = 0;

  static cpfPadrao = '000.000.000=00';

  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  // métodos estáticos
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.IdadePadrao, Pessoa.cpfPadrao);
  }

  getIdade(): number {
    return this.idade;
  }

  set cpf(cpf: string) {
    this.cpf = cpf;
  }

  get cpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} + ${this.sobrenome}`;
  }
}

class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return ` Isso vem do aluno: ${this.nome} + ${this.sobrenome}`;
  }
}

class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return ` Isso vem do cliente: ${this.nome} + ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Marcos', 'Wlrich', 30, '000.000.000-00');
const aluno = new Aluno('Marcos', 'Wlrich', 30, '000.000.000-00');
const cliente = new Cliente('Marcos', 'Wlrich', 30, '000.000.000-00');

console.log(pessoa.getNomeCompleto);
console.log(aluno.getNomeCompleto);
console.log(cliente.getNomeCompleto);
pessoa.cpf = '222.222.222-22'; // Setter
console.log(pessoa.cpf); // Getter

// chamando o método estático
const pessoa1 = Pessoa.criaPessoa('Maria', 'Joana');
console.log(pessoa1);

export { Pessoa, Aluno, Cliente };
