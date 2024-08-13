import axios from 'axios';
import React from 'react';
import { INIT_URL, SERVER_ENDPOINT } from 'shared';

export default async function checkServerStatus(
  setServerIsOnline: React.Dispatch<React.SetStateAction<boolean>>,
) {
  try {
    const response = await axios.get(
      `${INIT_URL}${SERVER_ENDPOINT.healthcheck}`,
    );
    if (response.status === 200) {
      setServerIsOnline(true);
    } else {
      setServerIsOnline(false);
    }
  } catch (error) {
    setServerIsOnline(false);
  }
}
