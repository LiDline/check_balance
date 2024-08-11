import axios from 'axios';
import React from 'react';

export default async function checkServerStatus(
  setServerIsOnline: React.Dispatch<React.SetStateAction<boolean>>,
) {
  try {
    const response = await axios.get(
      `http://localhost:${process.env.SERVER_PORT ?? '5000'}/healthcheck`,
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
