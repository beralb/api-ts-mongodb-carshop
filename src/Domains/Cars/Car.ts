import CarStatus from '../../utils/CarStatus';

interface CarParameters {
  id: string | undefined;
  model: string;
  year: number;
  color: string;
  status?: CarStatus;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
}

class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status?: CarStatus;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(carParameters: CarParameters) {
    this.id = carParameters.id;
    this.model = carParameters.model;
    this.year = carParameters.year;
    this.color = carParameters.color;
    this.status = carParameters.status;
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
  public setStatus(status: CarStatus | undefined) {
    if (!status) {
      this.status = 0;
    }
    this.status = status;
  }
  public getStatus(): CarStatus | undefined {
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
