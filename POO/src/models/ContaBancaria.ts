class ContaBancaria {
  private _saldo: number;

  constructor() {
    this._saldo = 0;
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
}

export { ContaBancaria };
