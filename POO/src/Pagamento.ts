class Pagamento {
  // Propriedades
  public vencimento: Date;

  // Métodos
  Pagar(): void {
    this.ConsultarSaldo();
  }

  private ConsultarSaldo(): void {}
}
