function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0];
    }
  };
}
@decorator
class Cachorro {
constructor(public cor: string) {}
}



const CachorroDecorated = decorator(Cachorro);
const cachorro = new Cachorro('Preto');
console.log(cachorro);