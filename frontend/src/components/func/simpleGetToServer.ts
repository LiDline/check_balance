import axios from 'axios';

import { EndpointValues, INIT_URL } from 'shared';

export default async function simpleGetToServer(
  endUrl: EndpointValues,
  params?: string,
): Promise<any> {
  const response = await axios.get(
    `${INIT_URL}${endUrl}${params ? `/?${params}` : ''}`,
  );

  return response;
}
