 function Converter(amount = 1000) {
  const usd = 78.45;  
  return Number((amount / usd).toFixed(2));  
}

console.log(Converter());        
console.log(Converter(5000));   


