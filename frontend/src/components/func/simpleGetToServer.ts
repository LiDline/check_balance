import axios from 'axios';

import { EndpointValues, INIT_URL } from 'shared';

export default async function simpleGetToServer(
  endUrl: EndpointValues,
): Promise<any> {
  const response = await axios.get(`${INIT_URL}${endUrl}`);

  return response;
}
