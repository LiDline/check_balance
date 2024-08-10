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
    ethereum:
      'https://api.etherscan.io/api?module=account&action=balance&address=' +
      address,
    tether_trc20: `https://apilist.tronscan.org/api/account/tokens?address=`,
    litecoin: `https://api.blockcypher.com/v1/ltc/main/addrs/${address}/balance`,
    cardano: `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}/total`,
  };

  return {
    address,
    url: urlObj[currency],
  };
}
