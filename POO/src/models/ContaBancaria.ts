class ContaBancaria {
  private _saldo: number;

  private _numero: string;

  private _agencia: string;

  constructor(numero: string, agencia: string) {
    this._saldo = 0;
    this._numero = this._validarNumero(numero) ? numero : '00000-0';
    this._agencia = agencia;
  }

  get numero(): string {
    return this._numero;
  }

  set numero(valor: string) {
    if (this._validarNumero(valor)) {
      this._numero = valor;
    } else {
      console.log('Numero de conta inválida...');
    }
  }

  get agencia(): string {
    return this._agencia;
  }

  set agencia(valor: string) {
    const regex = /^\d{3}-\d{1}$/;
    if (regex.test(valor)) {
      this._agencia = valor;
    } else {
      console.log('Número de agência inválida...');
    }
  }

  consultar(): number {
    return this._saldo;
  }

  depositar(valor: number): boolean {
    if (valor >= 0) {
      this._saldo = valor;
      return true;
    }
    return false;
  }

  sacar(valor: number): boolean {
    if (valor >= 0 && this._saldo >= valor) {
      this._saldo -= valor;
      return true;
    }
    return false;
  }

  private _validarNumero(numero: string) {
    const regex = /^\d{5}-\d{1}$/;
    if (regex.test(numero)) {
      this._numero = numero;
      return true;
    }
    return false;
  }
}

export { ContaBancaria };
