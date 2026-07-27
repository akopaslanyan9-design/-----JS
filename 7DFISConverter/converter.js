
function Converter(amount, fromCurrency, toCurrency) {
  if (amount === undefined || !fromCurrency || !toCurrency) return null;

  const rates = {
    'RUB_USD': 0.0128, 
    'USD_RUB': 78.00,
    'EUR_JPY': 165.50, 
    'JPY_EUR': 0.006   
  };


  const pair = `${fromCurrency}_${toCurrency}`;
  

  if (!rates[pair]) return null;


  return Number((amount * rates[pair]).toFixed(2));
}


console.log(Converter(1000, 'JPY', 'EUR')); 