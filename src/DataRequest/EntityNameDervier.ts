export class EntityNameDeriver<T> {
  constructor(private type: new () => T) {}

  derive(): string {
    return this.type.name.toLowerCase() + "s";
  }
}
