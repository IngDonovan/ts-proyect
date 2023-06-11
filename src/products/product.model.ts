//ya deduce que debemos usar import para tomar esta variable, ya tenemos un scope implicito
export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type product={
  name:string,
  createdAt:Date,
  stock:number;
  size?:Sizes
};
