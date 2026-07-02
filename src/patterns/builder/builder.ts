interface IBuilder {
  setStuff(value: string): void;
  setDough(value: string): void;
  setCheese(value: boolean): void;
  reset(): void;
  getResult(): unknown;
}

class Pizza {
  public stuffing: string = '';
  public dough: string = '';
  public cheese: boolean = false;
}

class PizzaBuilder implements IBuilder {
  private pizza: Pizza;
  constructor() {
    this.pizza = new Pizza();
  }
  reset(): void {
    this.pizza = new Pizza();
  }
  getResult(): Pizza {
    return this.pizza;
  }
  setStuff(value: string): void {
    this.pizza.stuffing = value;
  }
  setDough(value: string): void {
    this.pizza.dough = value;
  }
  setCheese(value: boolean): void {
    this.pizza.cheese = value;
  }
}

class Director<T extends IBuilder> {
  private builder: T;

  getBuilder(): IBuilder {
    return this.builder;
  }

  constructor(builder: T) {
    this.builder = builder;
  }

  buildPizza() {
    this.builder.reset();
    this.builder.setStuff('sausage');
    this.builder.setDough('thin dough');
    this.builder.setCheese(true);
  }
}

class SomeClass {
  private director: Director<PizzaBuilder>;
  constructor() {
    this.director = new Director(new PizzaBuilder());
  }
  build() {
    this.director.buildPizza();
    this.director.getBuilder().getResult();
  }
}
