import { Service } from "../serviceProvider/Service";

export interface IOrder {
  order(): void;
}

export class OrderService extends Service<IOrder> {}

export class Order implements IOrder {
  order(): void {
    console.log(`I ordered something`);
  }
}
