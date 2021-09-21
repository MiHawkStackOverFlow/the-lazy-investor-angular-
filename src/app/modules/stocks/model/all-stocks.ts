import { Stock } from './stock';

export const HUL: Stock= { id: 1, value: 2800, name: 'Hindustan Unilever', imgSrc: '', type: 'FMCG' };
export const TataMotors: Stock= { id: 2, value: 300, name: 'Tata Motors', imgSrc: '', type: 'AutoMobile' };
export const GodrejCP: Stock= { id: 3, value: 1000, name: 'Godrej Consumers', imgSrc: '', type: 'FMCG' };
export const Zomato: Stock= { id: 4, value: 150, name: 'Zomato', imgSrc: '', type: 'FMCG' };
export const Dabur: Stock= { id: 5, value: 600, name: 'Dabur', imgSrc: '', type: 'FMCG' };

export const allStocks: Stock[] = [ HUL, GodrejCP, Dabur, TataMotors, Zomato ];
