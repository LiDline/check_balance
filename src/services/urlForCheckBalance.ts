import type { CryptoKeys } from '@/interfaces/interfaces.balanceQuerySchema';

export default function urlForCheckBalance(
  currency: CryptoKeys,
  address: string,
): string | undefined {
  const urlObj = {
    bitcoin: 'https://blockchain.info/q/addressbalance/' + address,
    ethereum:
      'https://api.etherscan.io/api?module=account&action=balance&address=' +
      address,
    tether: `https://api.tether.to/v1/${address}/balance/`,
    litecoin: `https://api.blockcypher.com/v1/ltc/main/addrs/${address}/balance`,
    cardano: `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}/total`,
  };

  return urlObj[currency];
}
