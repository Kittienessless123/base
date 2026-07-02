export class Node {
  private value: any;

  private next: any;

  private weight: any;

  constructor(value: any, next: any, weight: any) {
    this.setNext(next);
    this.setValue(value);
    this.setWeight(weight);
  }

  public getValue(): any {
    return this.value;
  }

  public getNext(): any {
    return this.next;
  }

  public getWeight(): any {
    return this.weight;
  }

  public setValue(value: any) {
    this.value = value;
  }

  public setNext(next: any) {
    this.next = next;
  }

  public setWeight(weight: any) {
    this.weight = weight;
  }
}
