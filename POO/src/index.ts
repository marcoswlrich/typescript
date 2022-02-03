// public pode ser acessado fora da classe
// private pode ser acessado apenas dentro da classe
// protected pode ser acessado nas classes filhas.
class Empresa {
  public readonly name: string;

  protected readonly colaboradores: Colaborador[] = [];

  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

class Facebook extends Empresa {
  constructor() {
    super('Facebook', '11.111.111/0001-90');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

class Colaborador {
  constructor(public readonly name: string, public readonly sobrenome: string) {
    this.name = name;
    this.sobrenome = sobrenome;
  }
}

const empresa1 = new Facebook();
const colaborador1 = new Colaborador('Marcos', 'Wlrich');
const colaborador2 = new Colaborador('Maria', 'Joana');
const colaborador3 = new Colaborador('Marcos', 'Pedro');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(empresa1);
console.log(colaboradorRemovido);

export { Empresa, Colaborador, Facebook };
