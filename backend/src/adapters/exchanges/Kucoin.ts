import ccxt from 'ccxt';

const kucoin = new ccxt.kucoin();

export async function getLatestPrice(pair: string): Promise<Number> {
  try {
    const ticker = await kucoin.fetchTicker(pair);
    return  new Number(ticker.last);
  } catch (error) {
    console.error('Error fetching latest price:', error);
    throw error;
  }
}
