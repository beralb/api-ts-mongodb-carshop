import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(carParameters: ICar) {
    this.id = carParameters.id;
    this.model = carParameters.model;
    this.year = carParameters.year;
    this.color = carParameters.color;
    this.status = carParameters.status || false;
    this.buyValue = carParameters.buyValue;
    this.doorsQty = carParameters.doorsQty;
    this.seatsQty = carParameters.seatsQty;
  }

  public setId(id: string) {
    this.id = id;
  }
  public getId() {
    return this.id;
  }
  public setModel(model: string) {
    this.id = model;
  }
  public getModel() {
    return this.model;
  }
  public setYear(year: number) {
    this.year = year;
  }
  public getYear() {
    return this.year;
  }
  public setColor(color: string) {
    this.color = color;
  }
  public getColor() {
    return this.color;
  }
  public setStatus(status: boolean | undefined) {
    this.status = status;
  }
  public getStatus(): boolean | undefined {
    return this.status;
  }
  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }
  public getBuyValue() {
    return this.buyValue;
  }
  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }
  public getDoorsQty() {
    return this.doorsQty;
  }
  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
  public getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;
