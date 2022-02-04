class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem a ferramenta...');
      return;
    }
    this.ferramenta.escrever();
  }
}

abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

class Computador extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Marcos');
const caneta = new Caneta('BIC');
const computador = new Computador('Mac');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(computador.nome);

escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = computador;
escritor.escrever();

export { Escritor, Ferramenta, Caneta, Computador };
