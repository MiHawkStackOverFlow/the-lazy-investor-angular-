import { CryptoCurrency } from "./crypto";

export const Bitcoin: CryptoCurrency = { name: 'Bitcoin', value: 50000, marketCap: 100, circulationSupply: 18808968, ranking: 1, imgSrc: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60ed0c2a989b804396950ab1%2FGERMANY-STOCKPHOTO-BITCOIN-CRYPTOCURRENCY%2F960x0.jpg%3Ffit%3Dscale' };
export const Ethereum: CryptoCurrency = { name: 'Ethereum', value: 4000, marketCap: 50, circulationSupply: 117422291, ranking: 2, imgSrc: 'https://i1.wp.com/crowdwisdom.live/wp-content/uploads/2021/09/ethereum-1.jpeg' };
export const Solana: CryptoCurrency = { name: 'Solana', value: 200, marketCap: 20, circulationSupply: 291398038, ranking: 3, imgSrc: 'https://economictimes.indiatimes.com/thumb/msid-85979185,width-1000,height-624,resizemode-4,imgsize-15388/solana-image-source-solana-com.jpg?from=mdr' };
export const Cardano: CryptoCurrency = { name: 'Cardano', value: 3, marketCap: 30, circulationSupply: 32026340214, ranking: 4, imgSrc: 'https://cdn.coingape.com/wp-content/uploads/2021/07/16201528/cardano-price-10.jpg' };
export const Polygon: CryptoCurrency = { name: 'Polygon (MATIC)', value: 2, marketCap: 10, circulationSupply: 6649053883, ranking: 5, imgSrc: 'https://www.forexcrunch.com/wp-content/uploads/2021/06/polygon.jpg' };

export const allCryptos: CryptoCurrency[] = [ Bitcoin, Ethereum, Solana, Cardano, Polygon ];
