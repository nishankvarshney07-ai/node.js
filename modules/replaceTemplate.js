module.exports=(template,product)=>{
  let output=templat.replace('{%PRODUCTNAME%}',product.productName);
  output=output.replace('{%PRIICE%}',product.price);
  output=output.replace('{%IMAGE%}',product.image);
  return output;
};