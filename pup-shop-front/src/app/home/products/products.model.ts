export class SingleProduct {
  public id: number;
  public name: string;
  public price: number;
  public imagePath: string;
  public description: string;

  constructor(id:number,name:string,price:number,imagePath:string,desc:string){
    this.id = id;
    this.name = name;
    this.price = price;
    this.imagePath = imagePath;
    this.description = desc;
  }

}
