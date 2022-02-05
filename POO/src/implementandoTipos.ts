type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto: () => string;
};

type Cpf = {
  cpf: string;
};

class Pessoa implements TipoPessoa, Cpf {
  constructor(
    public nome: string,
    public sobrenome: string,
    public cpf: string,
  ) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  returnCpf(): string {
    return this.cpf;
  }
}

const pessoa = new Pessoa('Marcos', 'Wlrich', '000.000.000-00');
console.log(pessoa.nomeCompleto());
console.log(pessoa.returnCpf());

export { Pessoa };
