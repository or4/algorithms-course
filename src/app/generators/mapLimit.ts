const fetchUrl = (url: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url + ', complete!');
    }, 1000);
  });
};

/**
 * @name mapLimit
 * this implementation send PACKAGES by limit count
 * for example 7 urls, limit is 3
 * send 3 urls await 3 urls
 * than send 3 urls and again await 3 urls than send 1 url and wait
 */
export async function mapLimit(urls: any, limit: number, callback: Function) {
  const output: any[] = [];

  while (urls.length > 0) {
    let promises = [];
    while (promises.length < limit) {
      const url = urls.shift();
      if (url === undefined) {
        break;
      }
      promises.push(fetchUrl(url));
    }
    output.push.apply(output, await Promise.all(promises));
  }

  return output;
}

