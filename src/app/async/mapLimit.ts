const memoization = {};

const fetchUrl = (url: string) => {
  const cache = memoization[url];
  if (cache) {
    return cache;
  }
  const promise = new Promise(resolve => setTimeout(() => resolve(url + ', complete!'), 1000));
  memoization[url] = promise;
  return promise;
};

/**
 * Do promises by packages of limit size
 *
 * for example 7 promises, limit is 3
 * do 3 promises await 3 promises then do 3 promises and again await when 3 promises done
 * and than do 1 promise, wait, and return result
 */
export async function mapLimitPackage(urls: string[], limit: number) {
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
 * Do promises with limited count
 * when one of them done, do next
 * after all done, return result
 *
 * for example 7 promises, limit is 3
 * do 3 promises than await, when one of them done, then another promise do and etc
 * when all 7 will be done, after all return result
 */

export async function mapLimit(urls: string[], limit: number): Promise<any[]> {
  const promises: any[] = [];
  const urlsLoc = [...urls];

  function tryFetch(res: any) {
    const url = urlsLoc.shift();
    if (url !== undefined) {
      promises.push(fetchUrl(url).then(tryFetch));
    }
    return res;
  }

  while (limit > 0) {
    const url = urlsLoc.shift();
    if (url === undefined) {
      break;
    }
    promises.push(fetchUrl(url).then(tryFetch));
    limit -= 1;
  }

  return new Promise<any[]>(async (resolve) => {
    const interval = setInterval(async () => {
      if (urlsLoc.length === 0) {
        clearInterval(interval);
        resolve(await Promise.all(promises));
      }
    }, 100);
  });
}

