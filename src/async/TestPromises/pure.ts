
function test(): Promise<number> {
  const promise = new Promise<number>((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(123);
      }, 4000);
    } catch (error) {
      reject(new Error('Cannot save to local storage'));
    }
  });

  return promise;
}

export async function getCode(): Promise<number> {
  return test();
}
