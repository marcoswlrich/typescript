{
  type MeuTipo = string;

  function foo(x: MeuTipo) {
    return x;
  }

  type NullableString = string | null;

  function sayHello(name: NullableString) {
    if (name) console.log(name);
    return name;
  }

  type Nullable<T> = T | null;

  function sayHello2(name: Nullable<string>) {
    if (name) console.log(name);
    return name;
  }

  type User = {
    name: string;
    age?: number;
  };

  const objeto: User = { name: "Marcos" };
  const user: User = { name: "Ana" };
}
