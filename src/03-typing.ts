//funcion anonima auto ejecutada para evitar el tema de conflictos de las mismas variables
//metemos todo en ellas
//inferir  let myProductName : string = 'Product 1';
(()=>{
  let myProductName = 'Product 1';
  let myProductPrice = 123;

  myProductName = "change";
  myProductName.toLowerCase();

  myProductPrice.toFixed();

  const myProduct = 1000;
  const myProductName2 = 'producto 2';

})();
