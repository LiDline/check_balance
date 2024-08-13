import axios from 'axios';
import { AddAddress, EndpointValues, INIT_URL } from 'shared';

export default async function simplePostToServer(
  endUrl: EndpointValues,
  data: AddAddress,
) {
  const response = await axios.post(`${INIT_URL}${endUrl}`, data);

  return response;
}
