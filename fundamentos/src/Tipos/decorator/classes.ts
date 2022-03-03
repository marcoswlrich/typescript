class Cachorro {
constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0];
    }
  };
}

const CachorroDecorated = decorator(Cachorro);
const cachorro = new CachorroDecorated('Preto');
console.log(cachorro);