/* eslint-disable @typescript-eslint/no-explicit-any */

const MyFetch = (url: string): Promise<any> => {
  const Fetching = fetch(url)
    .then((response: any): void => response.json())
    .then((data: any): void => data.map((d: any): void => d));

  return Fetching.then((f: any): void => f);
};

export default MyFetch;
