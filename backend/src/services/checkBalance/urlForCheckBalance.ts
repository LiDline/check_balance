import type { CryptoKeys, UrlForCheckBalance } from 'shared';

export default function urlForCheckBalance(
  currency: CryptoKeys,
  address: string,
): UrlForCheckBalance {
  const blockcypherUrl = (value: 'eth' | 'ltc' | 'dash') =>
    `https://api.blockcypher.com/v1/${value}/main/addrs/${address}/balance`;

  const urlObj = {
    bitcoin: 'https://blockchain.info/q/addressbalance/' + address,
    tether_trc20:
      `https://apilist.tronscanapi.com/api/account/tokens?address=` + address,
    ethereum: blockcypherUrl('eth'),
    litecoin: blockcypherUrl('ltc'),
    dash: blockcypherUrl('dash'),
  };

  return {
    address,
    url: urlObj[currency],
  };
}
