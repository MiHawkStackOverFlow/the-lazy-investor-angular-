import { Card } from './card';

// Assets
export const stocks: Card        = { id: 1, imgSrc: 'https://upstox.com/app/themes/upstox/dist/img/home/stocks.png', name: 'Stocks' };
export const crypto: Card        = { id: 2, imgSrc: 'https://i.pinimg.com/originals/77/c2/05/77c205f27408688b643e1f332a586f53.gif', name: 'Crypto' };
export const mutualFunds: Card   = { id: 3, imgSrc: 'https://images.financialexpress.com/2020/10/1-222.jpg', name: 'Mutual Funds' };
export const goldAndSilver: Card = { id: 4, imgSrc: 'https://cbmint.com/pub/media/wysiwyg/CBMint_Bullion_Coins.jpg', name: 'Gold & Silver' };
export const fixedDeposits: Card = { id: 5, imgSrc: 'https://i.ibb.co/M24MT4H/download.jpg', name: 'Fixed Deposits' }

// Liabilties
export const house: Card        = { id: 1, imgSrc: 'https://img.freepik.com/free-vector/facade-building-suburban-house-with-garage-green-lawn-vector-cartoon-illustration-games-animation_273525-323.jpg?size=626&ext=jpg', name: 'House' };
export const car: Card          = { id: 2, imgSrc: 'https://i.pinimg.com/originals/d1/2a/6e/d12a6e88e902ffabd87c63791522cfd8.gif', name: 'Car' };

// Assets + Liabilities

export const assets: Card[] = [ stocks, crypto, mutualFunds, goldAndSilver, fixedDeposits ];
export const liabilities: Card[] = [ house, car ];
