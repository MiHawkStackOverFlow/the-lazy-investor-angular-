import { Card } from './card';

// Assets
export const stocks: Card        = { imgSrc: 'https://upstox.com/app/themes/upstox/dist/img/home/stocks.png', name: 'Stocks' };
export const crypto: Card        = { imgSrc: 'https://i.pinimg.com/originals/77/c2/05/77c205f27408688b643e1f332a586f53.gif', name: 'Crypto' };
export const mutualFunds: Card   = { imgSrc: 'https://images.financialexpress.com/2020/10/1-222.jpg', name: 'Mutual Funds' };
export const goldAndSilver: Card = { imgSrc: 'https://cbmint.com/pub/media/wysiwyg/CBMint_Bullion_Coins.jpg', name: 'Gold & Silver' };


// Liabilties
export const house: Card        = { imgSrc: 'https://img.freepik.com/free-vector/facade-building-suburban-house-with-garage-green-lawn-vector-cartoon-illustration-games-animation_273525-323.jpg?size=626&ext=jpg', name: 'House' };
export const car: Card          = { imgSrc: 'https://i.pinimg.com/originals/d1/2a/6e/d12a6e88e902ffabd87c63791522cfd8.gif', name: 'Car' };

// Assets + Liabilities

export const assets: Card[] = [ stocks, crypto, mutualFunds, goldAndSilver ];
export const liabilities: Card[] = [ house, car ];
