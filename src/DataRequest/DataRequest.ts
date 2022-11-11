import { DataObject } from "./DataObject";
import { EntityNameDeriver } from "./EntityNameDervier";

export class DataRequest<T extends DataObject> {
  private HOST = "http://localhost:8080/api/";
  constructor(private dataObjectType: new () => T) {}

  async find(): Promise<T[]> {
    const response = await fetch(this.generateUrl());
    const data = await response.json();
    return this.toDataObject(data);
  }

  private generateUrl(): string {
    const entityNameDeriver = new EntityNameDeriver(this.dataObjectType);
    return this.HOST + entityNameDeriver.derive();
  }

  private toDataObject(data: any): T[] {
    return data.map((row: any) => {
      return { ...row };
    });
  }
}

export const request = async <T extends DataObject>(
  dataObjectType: new () => T
): Promise<T[]> => {
  return new DataRequest(dataObjectType).find();
};
