import type {
  CryptoKeys,
  UrlForCheckBalance,
} from '../../interfaces/interfaces.balanceQuerySchema';

export default function urlForCheckBalance(
  currency: CryptoKeys,
  address: string,
): UrlForCheckBalance {
  const urlObj = {
    bitcoin: 'https://blockchain.info/q/addressbalance/' + address,
    ethereum: `https://api.blockcypher.com/v1/eth/main/addrs/${address}/balance`,
    tether_trc20:
      `https://apilist.tronscanapi.com/api/account/tokens?address=` + address,
    litecoin: `https://api.blockcypher.com/v1/ltc/main/addrs/${address}/balance`,
    cardano: `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}/total`,
  };

  return {
    address,
    url: urlObj[currency],
  };
}
