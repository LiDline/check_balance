import { writeError } from './writeError';

export async function checkFetchError(
  response: Response,
  message: string,
  needError: boolean,
): Promise<any | undefined> {
  try {
    const res = await response.json();

    return res;
  } catch (error: any) {
    writeError(
      error,
      message +
        ` : (text: ${response.statusText}, status: ${response.status}). ` +
        'fetch вернул HTML с ошибкой',
      needError,
    );

    return undefined;
  }
}
