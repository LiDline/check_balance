import axios from 'axios';
import { INIT_URL } from 'shared';

export default async function simpleDeleteToServer(endUrl: string) {
  const response = await axios.delete(`${INIT_URL}${endUrl}`);

  return response;
}
