import { Service } from "../serviceProvider/Service";

export interface IFactory {
  create<T>(type: new () => T): T;
}

export class FactoryService extends Service<IFactory> {}

export class Factory implements IFactory {
  private createdAt: Date;

  constructor() {
    this.createdAt = new Date();
  }

  create<T>(type: new () => T): T {
    console.log(
      `Services was created from factory ${this.createdAt.getTime()}`
    );
    return new type();
  }
}
