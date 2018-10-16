const fetchUrl = (url: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url + ', complete!');
    }, 1000);
  });
};

/**
 * @name mapLimit
 */
export async function mapLimit(urls: any, limit: number, callback: Function) {

  return fetchUrl(urls[0]);

  // return [];
}

