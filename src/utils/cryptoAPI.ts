export const apiBaseURL = 'https://api.nomics.com/v1';

export const apiKey = 'd4a0e64787142ce9f7460c69b7e3ea27';

export const cryptoPrice = `https://api.nomics.com/v1/prices?key=${apiKey}&format=json&per-page=10&page=1`;

export const specificCoin = (title: string) => {
  return `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${title.toUpperCase()}&interval=0&convert=USD`;
};
