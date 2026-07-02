export class Singletone {
  private static instance: unknown = null;

  private constructor() {}

  private static getInstance(): unknown {
    if (Singletone.instance === null) {
      Singletone.instance = new Singletone();
    }
    return Singletone.instance;
  }
}
