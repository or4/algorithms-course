const fetchUrl = (url: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url + ', complete!');
    }, 1000);
  });
};

/**
 * Send packets by limit size
 *
 * this implementation send PACKAGES by limit count
 * for example 7 urls, limit is 3
 * send 3 urls await 3 urls
 * than send 3 urls and again await 3 urls than send 1 url and wait
 */
export async function mapLimitPackage(urls: any, limit: number) {
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

/**
 * Send limit size at start
 * and then send by one after done one of the runned

 * for example 7 urls, limit is 3
 * send 3 urls than await, done 1, then send another 1 and etc
 */
export async function mapLimit(urls: any, limit: number) {
  const output: any[] = [];

  function tryFetch(res: any) {
    output.push(res);

    const url = urls.shift();
    if (url === undefined) {
      return;
    }
    fetchUrl(url).then(tryFetch);
  }

  while (limit > 0) {
    const url = urls.shift();
    if (url === undefined) {
      break;
    }
    fetchUrl(url).then(tryFetch);
    limit -= 1;
  }

  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (urls.length === 0) {
        clearInterval(interval);
        resolve(output);
      }
    }, 100);
  });
}

