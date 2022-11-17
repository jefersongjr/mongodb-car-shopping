class Car {
   private id: string | undefined;
   private model: string;
   private year: string;
   private  color: string;
   private status: boolean;
   private buyValue: number;
   private doorsQty: number;
   private seatsQty: number;

   constructor(
    id: string | undefined,
    model: string,
    year: string,
    color: string,
    status: boolean,
    buyValue: number,
    doorsQty: number,
    seatsQty: number,
   ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
   }

   public setId(id: string) {
        this.id = id;
   }

   public getId() {
    return this.id;
   }
  
  public setModel(model: string) {
    this.model = model;
   }

   public getModel() {
    return this.model;
   }

   public setYear(year: string) {
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

   public setStatus(status: boolean) {
    this.status = status;
   }

   public getStatus() {
    return this.status;
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